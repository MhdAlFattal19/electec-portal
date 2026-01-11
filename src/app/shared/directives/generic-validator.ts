import { UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

export class GenericValidator {
    isComponentActive = true;

    constructor(
        private validationMessages: { [key: string]: { [key: string]: string } }) { }

    processMessages(container: UntypedFormGroup): { [key: string]: string } {
        const messages = {};
        let translatedErrorMessage = '';
        for (const controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                const c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof UntypedFormGroup) {
                    const childMessages = this.processMessages(c);
                    Object.assign(messages, childMessages);
                } else {
                    // Only validate if there are validation messages for the control
                    if (this.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if (c.errors) {
                            Object.keys(c.errors).map(messageKey => {
                                if (this.validationMessages[controlKey][messageKey]) {
                                    this.validationMessages[controlKey][messageKey] =  translatedErrorMessage;
                                    // messages[controlKey] += translatedErrorMessage + ' ';
                                    messages[controlKey] = translatedErrorMessage;
                                }
                            });
                        }
                    }
                }
            }
        }

        return messages;
    }
    processMessagesForOnControl(container: UntypedFormGroup, name: String): { [key: string]: string } {
        const messages = {};
        let translatedErrorMessage = '';
        for (const controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey) && controlKey == name) {
                const c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof UntypedFormGroup) {
                    const childMessages = this.processMessages(c);
                    Object.assign(messages, childMessages);
                } else {
                    // Only validate if there are validation messages for the control
                    if (this.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if (c.errors) {
                            Object.keys(c.errors).map(messageKey => {
                                if (this.validationMessages[controlKey][messageKey]) {
                                  this.validationMessages[controlKey][messageKey] = translatedErrorMessage 
                                    // messages[controlKey] += translatedErrorMessage + ' ';
                                    messages[controlKey] = translatedErrorMessage;
                                }
                            });
                        }
                    }
                }
            }
        }

        return messages;
    }

    processMessagesDefault(container: UntypedFormGroup): { [key: string]: string } {
        const messages = {};
        let translatedErrorMessage = '';
        for (const controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                const c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof UntypedFormGroup) {
                    const childMessages = this.processMessages(c);
                    Object.assign(messages, childMessages);
                } else {
                    // Only validate if there are validation messages for the control
                    if (this.validationMessages["default"]) {
                        messages[controlKey] = '';
                        if (c.errors) {
                            Object.keys(c.errors).map(messageKey => {
                                if (this.validationMessages["default"][messageKey]) {
                                    this.validationMessages["default"][messageKey] = translatedErrorMessage                                    
                                    // uncomment if we want to receive all error messages
                                    // messages[controlKey] += translatedErrorMessage + ' ';
                                    messages[controlKey] = translatedErrorMessage;
                                }
                            });
                        }
                    }
                }
            }
        }
        return messages;
    }

    static LessThanToday(control: UntypedFormControl): ValidationErrors | null {
        let today: Date = new Date();
        if (control.value && control.value.year && control.value.month && control.value.day) {
            let ngbDate = new Date(control.value.year, control.value.month - 1, control.value.day);
            if (ngbDate <= today)
                return { 'lessThanToday': true };
        }
        return null;
    }

    static GreatThanToday(control: UntypedFormControl): ValidationErrors | null {
        let today: Date = new Date();
        if (control.value && control.value.year && control.value.month && control.value.day) {
            let ngbDate = new Date(control.value.year, control.value.month - 1, control.value.day);
            if (ngbDate >= today)
                return { 'wrongDate': true };
            return null;
        }
        return { 'wrongDate': true };
    }
    static ValidationToDay(control: UntypedFormControl, minDate: Date): ValidatorFn {
        return (control: UntypedFormControl): ValidationErrors | null => {
            if (control.value && control.value.year && control.value.month && control.value.day) {
                let ngbDate = new Date(control.value.year, control.value.month - 1, control.value.day);
                if (ngbDate < minDate)
                    return { 'validationToDay': true };
                return null;
            }
            return { 'validationToDay': true };
        }
    }

    static dateValidation(control: UntypedFormControl): ValidationErrors | null {
        if (control.value) {
            let ngbDate = new Date(control.value.year, control.value.month - 1, control.value.day);
            if (ngbDate.toString() === 'Invalid Date') {
                return { 'invalidDate': true }
            }
            return null;
        }
        return null;
    }
}


let requiredText = "Field Required";
export const ValidationMessages = {
    userName: {
        required: requiredText,
        maxLength: 'Error User Name Length'
    },
    password: {
        required: requiredText,
        maxlength: 'Error Password Length'
    },
    mobile: {
        required: requiredText,
        invalidPhoneNumber: 'Invalid Phone Number',
        pattern: 'Error Mobile Pattern',
        maxlength: 'Error Max Length',
        minlength: 'Error Min Length'
    },
    email: {
        required: requiredText,
        email: 'Error Email Format'
    },
}
