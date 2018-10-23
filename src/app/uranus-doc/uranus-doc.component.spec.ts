import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UranusDocComponent } from './uranus-doc.component';

describe('UranusDocComponent', () => {
  let component: UranusDocComponent;
  let fixture: ComponentFixture<UranusDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UranusDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UranusDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
