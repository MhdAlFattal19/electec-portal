import { FileDTO } from "../../../shared/models/shared-models";

export interface CreateUserRequest {
    userName: string;
    email: string;
    mobileNumber: string;
    password: string;
    branchId: Number;
    isBranchManager: boolean;
    dateJoined: Date;
    imageProfile: FileDTO;
    documents: FileDTO[];
}

export interface Permission {
    id: Number;
    name: string;
    categoryName: string
}

export interface PermissionView {

    categoryName: string;
    assignedCount: Number
    checkBoxList:  any[]
}

export interface CreateClientRequest {
    companyId: string;
    companyNameEN: string;
    companyNameAR: string;
    creditLimit: Number;
    period: Number;
    discount: Number;
    documents: FileDTO[]
    contacts:any[]
}