import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeptuneDocComponent } from './neptune-doc.component';

describe('NeptuneDocComponent', () => {
  let component: NeptuneDocComponent;
  let fixture: ComponentFixture<NeptuneDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeptuneDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeptuneDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
