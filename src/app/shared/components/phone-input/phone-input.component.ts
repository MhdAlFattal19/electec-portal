import { Component, Input, OnInit, Output, SimpleChanges,EventEmitter, OnChanges } from '@angular/core';
import { UntypedFormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss']
})
export class PhoneInputComponent implements OnChanges {
  @Input() fControlName: string;
  @Input() form: UntypedFormGroup;
  @Input() telInputOptions: any;
  @Input() phoneNumber: any;
  @Input() disabled: boolean;

  @Output() countryChange = new EventEmitter<any>();
  @Output() onError = new EventEmitter<boolean>();
  @Output() getPhoneNumber = new EventEmitter<string>();
  @Output() getPhoneNumberValidator = new EventEmitter<ValidatorFn>();

  telInput: any;

  telInputObject(obj: any) {
    this.telInput = obj;
    this.getPhoneNumberValidator.emit(this.phoneNumberValidator());
    if (this.phoneNumber) {
      this.telInput.setNumber(this.phoneNumber);
    }
  }

  phoneNumberValidator(): ValidatorFn {
    return () => {
      let controlValue = this.form.get(this.fControlName).value;
      let isValidNumber = this.telInput && controlValue !== '' ? this.isValidNumber() : true;

      return isValidNumber ? null : { 'invalidPhoneNumber': true };
    };
  }

  onCountryChange(countryChange: any) {
    this.countryChange.emit(countryChange);
    this.inputChange();
  }

  hasError(hasError: boolean) {
    this.onError.emit(hasError);
  }

  inputChange() {
    let result: string;
    let isValidNumber = this.isValidNumber();
    if (isValidNumber) {
      let selectedCountry = this.telInput.getSelectedCountryData();
      let phoneNumber = this.form.get(this.fControlName).value;
      result = `+${selectedCountry.dialCode} ${phoneNumber}`;
    }
    this.getPhoneNumber.emit(result);
  }

  isValidNumber() {
    var isValidNumber = false;
    var errorNumber = this.telInput.getValidationError();
    if (errorNumber == PhoneInputValidationErrors.IS_POSSIBLE || !(errorNumber in PhoneInputValidationErrors)) {
      isValidNumber = true;
    }
    this.onError.emit(isValidNumber);
    return isValidNumber;
  }
  setCountry(country:string){
    this.telInput.setCountry(country);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.telInputOptions && this.telInput && !this.form.get(this.fControlName).value) {
      this.telInput.setCountry(changes.telInputOptions.currentValue.initialCountry);
    }
  }
}

export enum PhoneInputValidationErrors {
  IS_POSSIBLE = 0,
  INVALID_COUNTRY_CODE = 1,
  TOO_SHORT = 2,
  TOO_LONG = 3,
  NOT_A_NUMBER = 4
}