import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantManagementComponent } from './grant-management.component';

describe('GrantManagementComponent', () => {
  let component: GrantManagementComponent;
  let fixture: ComponentFixture<GrantManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrantManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
