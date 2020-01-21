import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionAllComponent } from './cotizacion-all.component';

describe('CotizacionAllComponent', () => {
  let component: CotizacionAllComponent;
  let fixture: ComponentFixture<CotizacionAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
