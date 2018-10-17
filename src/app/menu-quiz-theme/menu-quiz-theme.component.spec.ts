import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuQuizThemeComponent } from './menu-quiz-theme.component';

describe('MenuQuizThemeComponent', () => {
  let component: MenuQuizThemeComponent;
  let fixture: ComponentFixture<MenuQuizThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuQuizThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuQuizThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
