import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizquestion } from './quizquestion';

describe('Quizquestion', () => {
  let component: Quizquestion;
  let fixture: ComponentFixture<Quizquestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quizquestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quizquestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
