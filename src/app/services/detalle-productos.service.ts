import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleProductosService {
  info : any = {};
  cargada = false;
  constructor(private http: HttpClient) {
    console.log("Servicio incializado Detalle Productos")
    this.http.get('assets/data/detalle-producto.json')
    .subscribe((detalle: any) => {
      console.log(detalle);
      this.cargada = true;
      this.info = detalle;
      console.log(detalle.ID);
    })
  
  }
}
