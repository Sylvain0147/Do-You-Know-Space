import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMenuQuizComponent } from './page-menu-quiz.component';

describe('PageMenuQuizComponent', () => {
  let component: PageMenuQuizComponent;
  let fixture: ComponentFixture<PageMenuQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMenuQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMenuQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
