import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyQuizComponent } from './easy-quiz.component';

describe('EasyQuizComponent', () => {
  let component: EasyQuizComponent;
  let fixture: ComponentFixture<EasyQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
