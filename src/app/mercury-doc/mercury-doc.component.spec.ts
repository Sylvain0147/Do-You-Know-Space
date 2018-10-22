import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercuryDocComponent } from './mercury-doc.component';

describe('MercuryDocComponent', () => {
  let component: MercuryDocComponent;
  let fixture: ComponentFixture<MercuryDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercuryDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercuryDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
