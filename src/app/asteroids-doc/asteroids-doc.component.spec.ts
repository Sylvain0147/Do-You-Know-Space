import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidsDocComponent } from './asteroids-doc.component';

describe('AsteroidsDocComponent', () => {
  let component: AsteroidsDocComponent;
  let fixture: ComponentFixture<AsteroidsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
