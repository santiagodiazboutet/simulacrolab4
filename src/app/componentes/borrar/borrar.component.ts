import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {
  @Input() pais:any;
  @Input() lista:Array<any>;
  constructor() {

   }


  ngOnInit(): void {
  }
  accion(){
    if(this.lista.findIndex(val=>val===this.pais)>-1){
    this.lista.splice(this.lista.findIndex(val=>val===this.pais),1);
    this.pais=null;}
  }
}
