import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmindashComponent } from './superadmindash.component';

describe('SuperadmindashComponent', () => {
  let component: SuperadmindashComponent;
  let fixture: ComponentFixture<SuperadmindashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadmindashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadmindashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
