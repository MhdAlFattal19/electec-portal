import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { Ng2TelInputModule } from 'ng2-tel-input';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import { ShortDatePipe } from './pipes/short-date.pipe';
import { SelectedRowsComponent } from './components/selected-rows/selected-rows.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { NbAccordionModule } from '@nebular/theme';
import { LocalNumberPipe } from './pipes/localNumberPipe';

@NgModule({
    exports: [
        CommonModule,
        NgbModule,
        PhoneInputComponent,
        ShortDatePipe,
        SelectedRowsComponent,
        AccordionComponent,
        LocalNumberPipe
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        FormsModule,
        OverlayModule,
        ReactiveFormsModule,
        PerfectScrollbarModule,
        Ng2TelInputModule,
        NbAccordionModule,
    ],
    declarations: [
        PhoneInputComponent,
        ShortDatePipe,
        SelectedRowsComponent,
        AccordionComponent,
        LocalNumberPipe,
    ],
    providers: [
    ]
})
export class SharedModule { }
