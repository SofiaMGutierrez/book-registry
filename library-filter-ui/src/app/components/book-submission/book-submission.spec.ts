import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSubmission } from './book-submission';

describe('BookSubmission', () => {
  let component: BookSubmission;
  let fixture: ComponentFixture<BookSubmission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSubmission],
    }).compileComponents();

    fixture = TestBed.createComponent(BookSubmission);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
