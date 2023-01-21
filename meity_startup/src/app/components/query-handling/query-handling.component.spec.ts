import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryHandlingComponent } from './query-handling.component';

describe('QueryHandlingComponent', () => {
  let component: QueryHandlingComponent;
  let fixture: ComponentFixture<QueryHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryHandlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
