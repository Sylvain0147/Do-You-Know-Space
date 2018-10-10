import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocArticleComponent } from './doc-article.component';

describe('DocArticleComponent', () => {
  let component: DocArticleComponent;
  let fixture: ComponentFixture<DocArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
