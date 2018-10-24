import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetsDocComponent } from './exoplanets-doc.component';

describe('ExoplanetsDocComponent', () => {
  let component: ExoplanetsDocComponent;
  let fixture: ComponentFixture<ExoplanetsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
