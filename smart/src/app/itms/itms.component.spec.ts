import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmsComponent } from './itms.component';

describe('ItmsComponent', () => {
  let component: ItmsComponent;
  let fixture: ComponentFixture<ItmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
