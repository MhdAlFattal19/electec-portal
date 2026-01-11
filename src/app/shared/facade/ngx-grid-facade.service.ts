import { Injectable } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GridApiResponse, GridProperties } from '../models/shared-models';
import { NgxGridHelperService } from '../services/ngx-grid-helper.service';
import { Search } from '../models/shared-models';
import { HttpClientHelperService } from '../services/http-client-helper.service';



@Injectable({
    providedIn: 'root'
})
export class NgxGridFacadeService {

    columnMode = ColumnMode.force;
    checkBoxSelectionType = SelectionType.checkbox;
    gridMessages = {}
    direction: string = "ltr";
    rowHeight: number = 45;
    footerHeight: number = 55;
    headerHeight: number = 25;

    constructor(
        private httpClientHelperService: HttpClientHelperService,
        private ngxGridHelperService: NgxGridHelperService) {
        this.getGridMessages();
    }

    //begin of main functions
    intializeGridProperties(pageNumber: number, pageSize: number): GridProperties {
        return this.ngxGridHelperService.intializeGridProperties(pageNumber, pageSize);
    }

    searchByColumn(searchColumnName: string, keyword: string, gridProperties: GridProperties): GridProperties {
        return this.ngxGridHelperService.searchByColumn(searchColumnName, keyword, gridProperties);
    }
    onSearch(search: Search, gridProperties: GridProperties): GridProperties {
        return this.ngxGridHelperService.onSearch(search, gridProperties);
    }

    onSort(event: any, gridProperties: GridProperties): GridProperties {
        return this.ngxGridHelperService.onSort(event, gridProperties);
    }

    getGridMessages() {
        this.gridMessages =
        {
            emptyMessage: 'No data to display',
            totalMessage: 'total',
            selectedMessage: 'selected'
        };
    }

    datePipe(value: any, ...args: any[]) {
        return value ? new Date(value).toLocaleString('en-US').split(',')[0] : '';
    }

    //end of main functions
    // //Users
    // getUsers(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/User/GetUsers`, {}, gridProperties, activityName);
    // }

    // //Clients
    // getClients(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Client/GetClients`, {}, gridProperties, activityName);
    // }

    // //Branches
    // getBranches(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Branch/GetBranchs`, {}, gridProperties, activityName);
    // }

    // //Categories
    // getCategories(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Category/GetCategories`, {}, gridProperties, activityName);
    // }

    // //SubCategories
    // getSubCategories(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/SubCategory/GetSubCategories`, {}, gridProperties, activityName);
    // }

    // //Products
    // getProducts(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Product/GetProducts`, {}, gridProperties, activityName);
    // }

    // //Purchase
    // getStoreProducts(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Store/GetStoreProducts`, {}, gridProperties, activityName);
    // }

    // //Inventory
    // getInventory(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Store/GetInventory`, {}, gridProperties, activityName);
    // }

    // getStoreProductsReport(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Store/GetStoreProductsReport`, {}, gridProperties, activityName);
    // }
    // // sales

    // getSales(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Sales/GetSales`, {}, gridProperties, activityName);
    // }

    // exportToExcel(request: any, gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.exportToExcel(`${environment.baseUrl}/api/v1/Export/ExportToExcel`, request, gridProperties, activityName);
    // }

    // getSalesReport(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Sales/getSalesReport`, {}, gridProperties, activityName);
    // }

    // getSalesReturn(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Sales/GetSalesReturn`, {}, gridProperties, activityName);
    // }


    // getCashManagements(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Cash/GetCash`, {}, gridProperties, activityName);
    // }
    // getCashManagementsReport(gridProperties: GridProperties, activityName: string) {
    //     return this.ngxGridHelperService.gridViewCall<GridApiResponse>(`${environment.baseUrl}/api/v1/Cash/GetCashReport`, {}, gridProperties, activityName);
    // }
}
