import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturnDocComponent } from './saturn-doc.component';

describe('SaturnDocComponent', () => {
  let component: SaturnDocComponent;
  let fixture: ComponentFixture<SaturnDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaturnDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaturnDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
