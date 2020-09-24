import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-regiones',
  templateUrl: './componente-regiones.component.html',
  styleUrls: ['./componente-regiones.component.css']
})
export class ComponenteRegionesComponent implements OnInit {
  @Output() emisor:EventEmitter<String>=new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  region(region:String){
    console.log(region);
    this.emisor.emit(region);
  }
}
