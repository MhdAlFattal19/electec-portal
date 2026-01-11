import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private data = new Map<string, any>();
  public isOnSetUp :boolean = false;
  public isSetUpcompleted: boolean = true;
  constructor() { }

  setData(key: string, value: any) {
    this.data.set(key, value);
  }
  getData(key: string) {
    return this.data.get(key);
  }
  removeData(key: string) {
    this.data.delete(key);
  }
  clearAllData(){
    this.data.clear();
  }
}
