import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntoCanosComponent } from './conjunto-canos.component';

describe('ConjuntoCanosComponent', () => {
  let component: ConjuntoCanosComponent;
  let fixture: ComponentFixture<ConjuntoCanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjuntoCanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjuntoCanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
