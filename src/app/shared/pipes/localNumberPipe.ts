import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { DecimalPipe, getLocaleNumberFormat, NumberFormatStyle } from '@angular/common';

//todo: pipe is impure! - try to find more optimal solution to localize date

@Pipe({ name: 'toLocalNumber', pure: false })
export class LocalNumberPipe extends DecimalPipe implements PipeTransform {

  transform(value: string): any {
    var locale = 'en';
    if (typeof (value) == "string") {
      var localeNumberFormatPattern = getLocaleNumberFormat(locale, NumberFormatStyle.Decimal);
      var groupingSeparator = localeNumberFormatPattern[1];
      if (value.indexOf(groupingSeparator) > -1) {
        value = value.replace(new RegExp(groupingSeparator, 'g'), "");
      }
    }

    var parsedValue = parseFloat(value);
    let finalFormat = '1.' + 0 + '-' + 0
    if (!isNaN(parsedValue)) {
      let transformedValue = super.transform(parsedValue, finalFormat, 'en');
      return transformedValue;
    } else {
      return value;
    }
  }
}
