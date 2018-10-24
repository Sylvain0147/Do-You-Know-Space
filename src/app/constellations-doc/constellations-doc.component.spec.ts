import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationsDocComponent } from './constellations-doc.component';

describe('ConstellationsDocComponent', () => {
  let component: ConstellationsDocComponent;
  let fixture: ComponentFixture<ConstellationsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstellationsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstellationsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
