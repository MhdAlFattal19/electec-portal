import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDate'
})
export class ShortDatePipe extends DatePipe implements PipeTransform {
  transform(value: string): any {
    return super.transform(value, 'dd/MM/yyyy');
  }
}
