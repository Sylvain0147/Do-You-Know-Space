import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilDocComponent } from './accueil-doc.component';

describe('AccueilDocComponent', () => {
  let component: AccueilDocComponent;
  let fixture: ComponentFixture<AccueilDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
