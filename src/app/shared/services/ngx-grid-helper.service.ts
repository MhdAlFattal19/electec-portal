import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterOperations, GridProperties, OrderByEnum, OrderByField, WhereField,Search } from '../models/shared-models';
import { FileService } from './file.service';
import { HttpClientHelperService } from './http-client-helper.service';

@Injectable({
  providedIn: 'root'
})
export class NgxGridHelperService {

  constructor(
    private httpClientHelperService: HttpClientHelperService,
    private fileService: FileService) { }

  intializeGridProperties(pageNumber: number, pageSize: number): GridProperties {
    let gridProperties = new GridProperties();
    gridProperties.pageSize = pageSize;
    gridProperties.pageIndex = pageNumber;
    gridProperties.where = new Array<WhereField>();
    gridProperties.orderBy = new Array<OrderByField>();
    return gridProperties;
  }

  searchByColumn(searchColumnName: string, keyword: string, gridProperties: GridProperties): GridProperties {
    let word = keyword.toLowerCase();
    gridProperties.where = new Array<WhereField>();
    if (word) {
      gridProperties.where.push(
        {
          name: searchColumnName,
          value: "%" + word + "%",
          operation: FilterOperations.contains
        });
    }
    return gridProperties;
  }
  
  onSearch(search: Search, gridProperties: GridProperties): GridProperties {
    let value = search.keyword.toLowerCase();
    gridProperties.where = new Array<WhereField>();
    if (value) {
      search.fieldsName.forEach(a => {
        gridProperties.where.push(
          {
            name: a.fieldName,
            value: a.opreation == 3 ? "%" + value + "%" : value,
            operation: a.opreation
          });
      })
    }
    return gridProperties;
  }

  onSort(event: any, gridProperties: GridProperties): GridProperties {
    let sorts = event.sorts;
    if (sorts && sorts.length > 0) {
      gridProperties.orderBy = new Array<OrderByField>();
      gridProperties.orderBy.push({ name: sorts[0].prop, direction: parseInt(OrderByEnum[sorts[0].dir]) });
    }
    return gridProperties;
  }

  gridViewCall<T>(url: string, body: any, gridProperties: GridProperties, activityName: string): Observable<T> {
    let bodyToBeSent = { ...body, GridProperties: gridProperties };
    return this.httpClientHelperService.postGrid<T>(url, bodyToBeSent, activityName);
  }

  exportToExcel(url: string, body: any, currentGridProperties: GridProperties, activityName: string) {
    let gridProperties: GridProperties = new GridProperties();
    gridProperties.pageSize = 1000000;
    gridProperties.pageIndex = 0;
    gridProperties.where=currentGridProperties.where;
    gridProperties.orderBy=currentGridProperties.orderBy;
    gridProperties.isExportToExcel = true;

    let bodyToBeSent = { ...body, GridProperties: gridProperties };

    this.httpClientHelperService
      .postWithParams(url, bodyToBeSent, { responseType: "text", headers: new HttpHeaders().append("activityName", activityName) })
      .pipe(
        map((x) => {
          return this.fileService.b64toBlob(
            x,
            "application/vnd.ms-excel",
            body.SheetName
          );
        })).pipe(
          map((file) => {
            this.fileService.downloadFile(file);
          })).subscribe();
  }

}
