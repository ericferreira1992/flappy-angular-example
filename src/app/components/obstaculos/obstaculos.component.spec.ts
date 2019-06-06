import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstaculosComponent } from './obstaculos.component';

describe('ObstaculosComponent', () => {
  let component: ObstaculosComponent;
  let fixture: ComponentFixture<ObstaculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObstaculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObstaculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
