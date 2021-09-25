import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeProductosComponent } from './detalle-de-productos.component';

describe('DetalleDeProductosComponent', () => {
  let component: DetalleDeProductosComponent;
  let fixture: ComponentFixture<DetalleDeProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDeProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
