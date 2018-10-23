import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunDocComponent } from './sun-doc.component';

describe('SunDocComponent', () => {
  let component: SunDocComponent;
  let fixture: ComponentFixture<SunDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
