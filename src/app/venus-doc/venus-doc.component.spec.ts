import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenusDocComponent } from './venus-doc.component';

describe('VenusDocComponent', () => {
  let component: VenusDocComponent;
  let fixture: ComponentFixture<VenusDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenusDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenusDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
