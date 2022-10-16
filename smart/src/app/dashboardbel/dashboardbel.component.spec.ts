import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardbelComponent } from './dashboardbel.component';

describe('DashboardbelComponent', () => {
  let component: DashboardbelComponent;
  let fixture: ComponentFixture<DashboardbelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardbelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardbelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
