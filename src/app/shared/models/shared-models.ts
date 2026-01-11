export class GridProperties {

    pageSize: number
    pageIndex: number
    where: WhereField[]
    orderBy: OrderByField[]
    isExportToExcel: boolean
    isAllRecordsSelected?: boolean = false
}

export interface WhereField {
    name: string
    value: string
    operation: number
}

export interface OrderByField {
    name: string
    direction: number
}

export enum FilterOperations {
    "equal" = 1,
    "notEqual" = 2,
    "contains" = 3,
    "greaterThan" = 5,
    "greaterThanOrEqual" = 7,
    "lessThanOrEqual" = 8,
    "in" = 9
}

export enum OrderByEnum {
    "asc" = 1,
    "desc" = 2
}

export interface GridApiResponse {
    data: any[]
    totalCount: number
}

export interface Search {
    keyword: string,
    fieldsName: SearchProperties[],
}

export interface SearchProperties {
    fieldName: string,
    opreation: FilterOperations,
}

export interface APIResponse {
    data: any;
    status: number;
    messageDTOs: APIMessage[];
    errorMessage?: string;
}

export interface APIResponseBankTransfer {
    data: any;
    status: number;
    message: string;
    errorMessage: string;
}
export interface APIMessage {
    message: string;
    type: number;
}
export interface Gender {
    id: number
    name: string
}
export class FileDTO {
    fileId?: number;
    storageId?: string;
    fileTypeId?: number;
    mimeType?: string;
    fileName?: string;
    fileBase64Content?: string;
    fileBlobContent?: Blob;
    fileSize?: number;
    constructor(fileId,
        storageId,
        fileTypeId,
        mimeType,
        fileName,
        fileBase64Content,
        fileBlobContent,
        fileSize) {
        this.fileId = fileId
        this.storageId = storageId
        this.fileTypeId = fileTypeId
        this.mimeType = mimeType
        this.fileName = fileName
        this.fileBase64Content = fileBase64Content
        this.fileBlobContent = fileBlobContent
        this.fileSize = fileSize
    }
}

export class AccordionGroup {
    categoryName: string;
    assignedCount: number;
    checkBoxList: AccordionCheckBoxModel[];

    constructor(nameInput: string, assignedCountInput: number, checkBoxListInput: AccordionCheckBoxModel[]) {
        this.categoryName = nameInput;
        this.assignedCount = assignedCountInput;
        this.checkBoxList = checkBoxListInput;
    }
}

export interface AccordionCheckBoxModel {
    id: string,
    name: string,
    isSelected: boolean
}

export class AccordionCheckBoxesReturnObject {
    groupName: string;
    selectedCheckBoxes: AccordionCheckBoxModel[];

    constructor(groupNameInput: string, selectedCheckBoxesInput: []) {
        this.groupName = groupNameInput;
        this.selectedCheckBoxes = selectedCheckBoxesInput;
    }
} 

export interface User {
    fullName : string;
    accessToken : string,
    refreshToken : string,
    balance : number,
    currency : string,
    permissions : string []  
}
