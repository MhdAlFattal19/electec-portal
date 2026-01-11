import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from '../surveyService';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-public-announcements',
  templateUrl: "./public-announcements.component.html",
  styleUrls: ['./public-announcements.component.scss']
})
export class PublicAnnouncementsComponent implements OnInit {

  form!: FormGroup;
  loading = false;

  stars = [1, 2, 3, 4, 5];
  rating = 0;

  constructor(private fb: FormBuilder,
    private surveyService: SurveyService,
    private toastr: NbToastrService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      mobile: ['', Validators.required],
      technicianName: ['', Validators.required],
      serviceType: ['', Validators.required],

      success: [null, Validators.required],
      amount: [''],

      maintenance: this.fb.group({
        power: [false],
        inverter: [false],
        lithium: [false],
        agm: [false],
        ups: [false],
      }, { validators: this.atLeastOneMaintenance }),

      rating: [null, Validators.required],
      notes: [''], // ❗ غير مطلوب
    });
  }

  /* ⭐ rating */
  setRating(value: number): void {
    this.rating = value;
    this.form.patchValue({ rating: value });
    this.form.get('rating')?.markAsTouched();
  }

  /* ✔ custom validator: at least one checkbox */
  atLeastOneMaintenance(group: FormGroup) {
    const anyChecked = Object.values(group.value).some(v => v === true);
    return anyChecked ? null : { required: true };
  }

  /* helper */
  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  async submit() {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    try {
      await this.surveyService.saveSurvey(this.form.value);

      this.toastr.success(
        'تم إرسال الاستبيان بنجاح',
        'نجاح',
        { duration: 3000 }
      );

      this.resetForm();
    } catch (error) {
      this.toastr.danger(
        'حدث خطأ أثناء الإرسال',
        'خطأ'
      );
    } finally {
      this.loading = false;
    }
  }

  resetForm() {
    this.form.reset();
    this.rating = 0;

    // reset checkboxes
    Object.keys(this.form.get('maintenance')!.value).forEach(key => {
      this.form.get('maintenance.' + key)?.setValue(false);
    });
  }
}
