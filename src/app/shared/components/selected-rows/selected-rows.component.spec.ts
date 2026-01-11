import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRowsComponent } from './selected-rows.component';

describe('SelectedRowsComponent', () => {
  let component: SelectedRowsComponent;
  let fixture: ComponentFixture<SelectedRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedRowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
