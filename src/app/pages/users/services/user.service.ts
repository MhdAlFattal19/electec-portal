import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClientHelperService } from "../../../shared/services/http-client-helper.service";
import { CreateClientRequest, CreateUserRequest } from "../models/user.models";
import { APIResponse } from "../../../shared/models/shared-models";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private httpClientHelperService: HttpClientHelperService) {
    }

    // createUser(request: CreateUserRequest, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/User/CreateUser`, request, activityName);
    // }


    // updateUser(request: any, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/User/UpdateUser`, request, activityName);
    // }

    // getUser(request: any, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/User/GetUser`, request, activityName);
    // }

    // deleteUser(request: any, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/User/DeleteUser`, request, activityName);
    // }

    // getPermissions(request: any, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/User/GetPermissions`, request, activityName);
    // }
    // getUserPermissions(request: any, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/User/GetUserPermissions`, request, activityName);
    // }
    // //Clients
    // createClient(request: CreateClientRequest, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/Client/CreateClient`, request, activityName);
    // }
    // deleteClient(request: any, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/Client/DeleteClient`, request, activityName);
    // }

    // getClient(request: any, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/Client/GetClient`, request, activityName);
    // }

    // updateClient(request: any, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/Client/UpdateClient`, request, activityName);
    // }

    // saveActivities(request: any, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/User/SaveUserPermissions`, request, activityName);
    // }

    // getClientsList(activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/Client/GetClientList`, {}, activityName);
    // }

    // resetPassword(userEmail: string, password: string, activityName: string) {
    //     return this.httpClientHelperService.post<any>
    //         (`${environment.baseUrl}/api/v1/Auth/ChangePassword`, { email: userEmail, newPassword: password }, activityName);
    // }

    // onGetActivites(): any[] {
    //     let user = JSON.parse(localStorage.getItem('current-user'));
    //     return user.permissions;
    // }

    // isActivityAllowedByUser(activityName: string): boolean {
    //     let activities = this.onGetActivites();
    //     return activities.filter(a => a == activityName).length > 0
    // }

}