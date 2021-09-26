import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleProductosService } from '../../services/detalle-productos.service';

@Component({
  selector: 'app-detalle-de-productos',
  templateUrl: './detalle-de-productos.component.html',
  styleUrls: ['./detalle-de-productos.component.css']
})
export class DetalleDeProductosComponent implements OnInit {
  
  id:any;

  constructor(private router: ActivatedRoute, public _servicio1: DetalleProductosService) { }
  arrdet: any[] = [
    { imagen: 'assets/img/Producto3Recurso 5.png', ID:'Corona'},
    { imagen: 'assets/img/Producto2Recurso 2.png',ID:'Gallo'},
    { imagen: 'assets/img/Producto3Recurso 4.png',ID:'Atlas'}
  ]
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id= params;
      console.log('id: ', this.id);
    });
  }

}
