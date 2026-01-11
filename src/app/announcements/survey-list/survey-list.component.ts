import { Component } from '@angular/core';
import { SurveyService } from '../surveyService';

@Component({
  selector: 'ngx-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent {
  surveys: any[] = [];
  loading = true;

  openedIndex: number | null = null;

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getSurveys().subscribe(data => {
      this.surveys = data;
      this.loading = false;
    });
  }

  toggle(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openedIndex === index;
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  getRatingClass(rating: number): string {
    if (rating >= 4) {
      return 'rate-good';
    }
    if (rating === 3) {
      return 'rate-mid';
    }
    return 'rate-bad';
  }
}
