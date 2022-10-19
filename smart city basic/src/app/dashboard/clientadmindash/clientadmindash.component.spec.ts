import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientadmindashComponent } from './clientadmindash.component';

describe('ClientadmindashComponent', () => {
  let component: ClientadmindashComponent;
  let fixture: ComponentFixture<ClientadmindashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientadmindashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientadmindashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
