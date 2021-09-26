import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { } 
  arrProductos: any[] = [
    { imagen: 'assets/img/Producto3Recurso 5.png', nombre: 'Cerveza Corona 12 oz. SixPack', Precio: 'Q35.50', Descripcion: 'Es una bebida del tipo pilsener que comenzó a elaborarse en el año de 1925 en la planta de la Cervecería Modelo', ID:'Corona'},
    { imagen: 'assets/img/Producto2Recurso 2.png', nombre: 'Cerveza Gallo  12 oz. SixPack', Precio: 'Q51.00', Descripcion: 'Es la cerveza más consumida en Guatemala. La Cervecería Centro Americana tuvo hasta 2003 una cuota de mercado cercana al 100% del mercado cervecero guatemalteco',ID:'Gallo'},
    { imagen: 'assets/img/Producto3Recurso 4.png', nombre: 'Cerveza Atlas 12 oz. SixPack', Precio: 'Q45.50', Descripcion: 'Elaborada con el más bajo nivel de amargor para permitir al consumidor disfrutar de una cerveza ligera y refrescante.',ID:'Atlas'}
  ]

  ngOnInit(): void {
  }

}
