import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { FileDTO, FilterOperations, Gender, GridProperties } from '../../../../shared/models/shared-models';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NgxGridFacadeService } from '../../../../shared/facade/ngx-grid-facade.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericValidator, ValidationMessages } from '../../../../shared/directives/generic-validator';
import { RegexValidationPatterns } from '../../../../shared/models/regex';
import { FileUploader } from 'ng2-file-upload';
import { APIResponseEnum } from '../../../../shared/models/enums';
import { NgxToastrService } from '../../../../shared/services/toastr.service';
import { LocalNumberPipe } from '../../../../shared/pipes/localNumberPipe';
import { CommunicationService } from '../../../../shared/services/communication.service';


@Component({
  selector: 'ngx-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @ViewChild('statusTemplate') statusTemplate: TemplateRef<any>;
  @ViewChild('actionsTemplate') actionsTemplate: TemplateRef<any>;
  @ViewChild('employeeTemplate') employeeTemplate: TemplateRef<any>;
  @ViewChild('addClientTemplate') addClientTemplate: TemplateRef<any>;
  @ViewChild('addContactPersonTemplate') addContactPersonTemplate: TemplateRef<any>;
  @ViewChild('updateClientTemplate') updateClientTemplate: TemplateRef<any>;
  @ViewChild('changeStatusTemplate') changeStatusTemplate: TemplateRef<any>;

  totalCount: number = 0;
  items: any[];
  columns: TableColumn[] = [];
  pageSize: number = 7;
  selectedFilter: string;
  gridProperties: GridProperties;
  isAllRecordsPagesSelected: boolean = false;
  count: number = 0;
  currentUser: string;
  getgGridDataSubscription: Subscription;
  clientId: number = 0;
  formChangesSub: Subscription;
  changes: any[] = []
  displayMessage: { [key: string]: string } = {};
  pagePendingCount: number;
  form: UntypedFormGroup;
  submitted: boolean;
  genericValidator: GenericValidator;
  mobileNumber: string = '';
  defaultMobileCountry: string = 'sy';
  types: any[];
  persons: any[];
  documentFile: FileDTO;
  isAcceptedImage: boolean;
  uploaders: Array<FileUploader> = [];
  uploader: FileUploader = new FileUploader({
    isHTML5: true,
  });
  clientDetails: any = null;
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;
  customClient = false;
  isDefault = false;
  searchValue: string = "";


  constructor(
    public ngxGridFacadeService: NgxGridFacadeService,
    private modalService: NgbModal,
    private toastrService: NgxToastrService,
    private fb: UntypedFormBuilder,
    private communicationService: CommunicationService,
    private router: Router) {
    this.genericValidator = new GenericValidator(ValidationMessages);
  }



  ngOnInit(): void {
    this.initForm();
    this.intializeGridColumns();
    this.gridProperties = this.ngxGridFacadeService.intializeGridProperties(0, this.pageSize);
    this.getGridData(this.gridProperties);
  }

  ngAfterViewInit() {
    this.intializeGridColumns();
  }

  onSort(event) {
    this.gridProperties = this.ngxGridFacadeService.onSort(event, this.gridProperties);
    this.getGridData(this.gridProperties);
  }

  onPageChanged(event) {
    if (this.gridProperties.pageIndex != event.offset) {
      this.gridProperties.pageIndex = event.offset;
      this.getGridData(this.gridProperties);
    }
  }

  deleteClient() {

    // this.userService.deleteClient({ clientId: this.clientId }, '').subscribe(res => {
    //   if (res.status == APIResponseEnum.Success) {
    //     this.getGridData(this.gridProperties);
    //     this.toastrService.manageApiMessages(res)

    //     this.closePopUp();
    //     this.ngOnInit()
    //   }
    // });
  }

  fillGridPropertiesForAction() {
    this.gridProperties.isAllRecordsSelected = this.isAllRecordsPagesSelected;
  }

  onSelect(event) {
  }

  intializeGridColumns() {
    this.columns = [
      {
        name: 'First Name', prop: 'firstName'
      },
      {
        name: 'Last Name', prop: 'lastName', $$oldWidth: 200
      },
      {
        name: 'Email', prop: 'email', $$oldWidth: 200
      },
      {
        name: 'Phone Number', prop: 'phoneNumber', $$oldWidth: 200
      },
      {
        name: 'Address', prop: 'address', $$oldWidth: 250
      },
      {
        name: 'Status', prop: 'status', cellTemplate: this.statusTemplate, $$oldWidth: 100
      },
      {
        name: 'Actions', prop: '', draggable: false, resizeable: false, cellTemplate: this.actionsTemplate
      }
    ];
  }

  onSearch(event) {
    if (event.key === "Enter") {
      this.searchValue = event.target.value

      this.items = []
      this.totalCount = 0

      if (this.searchValue != '') {
        let search = {
          keyword: this.searchValue,
          fieldsName: [
            {
              fieldName: 'SearchCrateria',
              opreation: FilterOperations.contains
            }

          ]
        }
        this.gridProperties.pageIndex = 0
        this.gridProperties = this.ngxGridFacadeService.onSearch(search, this.gridProperties);
      }
      else {
        this.gridProperties = this.ngxGridFacadeService.intializeGridProperties(0, this.pageSize)
      }

      this.getGridData(this.gridProperties);
    }
  }

  getGridData(gridProperties: GridProperties) {

    this.items = [
      {
        id: 1,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'Active'
      },
      {
        id: 2,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'Active'
      }, {
        id: 3,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'Active'
      }, {
        id: 4,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'InActive'
      }, {
        id: 5,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'Active'
      }, {
        id: 6,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'Active'
      }, {
        id: 7,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'InActive'
      }, {
        id: 8,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'InActive'
      }, {
        id: 9,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'InActive'
      }, {
        id: 10,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'Active'
      }, {
        id: 11,
        firstName: 'Mhd',
        lastName: 'AlFattal',
        email: 'eng,moafak.alfattal',
        phoneNumber: '+963997640391',
        address: 'Damascus syria Ibn-Asaker',
        status: 'InActive'
      },
    ]
    this.totalCount = 11;

    // this.getgGridDataSubscription = this.ngxGridFacadeService.getClients(gridProperties, '').subscribe(res => {
    //   this.items = res.data;
    //   this.totalCount = res.totalCount;
    // })

  }

  openChangeStatus(context, clientId) {
    this.clientId = clientId;
    this.modalService.open(context, { centered: true });
  }

  closePopUp() {
    this.modalService.dismissAll();
  }

  initForm() {
    this.displayMessage = {};
    this.submitted = false;
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    this.form.valueChanges.subscribe(
      value => {
        if (this.submitted) {
          this.generateValidationMessage();
        }
      }
    )
  }

  generateValidationMessage() {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  setPhoneValidator(phoneValidator: ValidatorFn) {
    this.form.controls["phonNumber"].setValidators([Validators.required, Validators.pattern(RegexValidationPatterns.PHONE_NUMBER_REGEX), Validators.minLength(6), Validators.maxLength(12), phoneValidator]);
  }

  setPhoneNumber(input: any) {
    this.mobileNumber = input;
  }

  onNavigateToUpdateClient(clientId) {
    this.communicationService.setData('clientId', clientId);
    this.router.navigate(['/pages/users/update-client'])
  }


  removeFile(item: any) {
    this.documentFile = null;
    this.uploader.clearQueue();
  }

  uploadFile() {
    document.getElementById("imgupload").click();
  }

  onResetPasswordModelOpen(context,email:string){
    //this.userEmail = email;
    //this.initPasswordForm();
    this.modalService.open(context, { centered: true });
  }

  handleFileInput(files) {
    if (this.uploader.queue.length == 0) {
      let allImages: Array<string> = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/tiff', 'image/bpg'];
      if (allImages.indexOf(files[0].type) === -1) {
        //this.toastr.error("File format not accepted.");
        this.isAcceptedImage = false;
      }
      else {
        this.isAcceptedImage = true;
        this.uploader.addToQueue(files)
        this.fileToFileDto(files[0])
      }
    }
  }

  fileToFileDto(file: File) {
    if (file) {
      let reader = new FileReader();
      reader.onload = () => {
        this.documentFile = new FileDTO(null, null, null, file.type, file.name, reader.result.toString().split(',')[1], null, file.size)
      }
      reader.readAsDataURL(file);
    }

  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  dropped(event) {
    if (event[0].type != "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      // this.toastr.error(
      //   "File format not accepted. Please download the sample file instead"
      // );
    }
    else {
      this.fileToFileDto(event[0])
    }
  }

  onDeleteModalOpen(context, clientId) {
    this.clientId = clientId;
    this.modalService.open(context, { centered: true });
  }

  onContactPersonModalOpen(context) {
    this.modalService.open(context, { centered: true });
  }


  onAddClient() {
    this.initForm();
    this.modalService.open(this.addClientTemplate, { windowClass: "myCustomModalClass" });
  }

  getClient(clientId) {
    // this.userService.getClient({ clientId: clientId }, '').subscribe(res => {
    //   this.clientDetails = res.data
    //   this.initForm();
    //   this.modalService.open(this.updateClientTemplate, { windowClass: "myCustomModalClass" });
    // });
  }

  isActivityAllowedByUser(activityName: string) {
    return true;
    // return this.userService.isActivityAllowedByUser(activityName);
  }



  addClient() {

  }
}
