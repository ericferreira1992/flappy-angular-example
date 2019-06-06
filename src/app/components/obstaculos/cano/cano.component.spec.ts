import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanoComponent } from './cano.component';

describe('CanoComponent', () => {
  let component: CanoComponent;
  let fixture: ComponentFixture<CanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
