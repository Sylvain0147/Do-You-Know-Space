import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JupiterDocComponent } from './jupiter-doc.component';

describe('JupiterDocComponent', () => {
  let component: JupiterDocComponent;
  let fixture: ComponentFixture<JupiterDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JupiterDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JupiterDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
