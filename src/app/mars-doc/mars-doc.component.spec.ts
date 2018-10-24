import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsDocComponent } from './mars-doc.component';

describe('MarsDocComponent', () => {
  let component: MarsDocComponent;
  let fixture: ComponentFixture<MarsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
