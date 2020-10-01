import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  tipoListado:boolean=true;
  unpais:any;
  lista:any;
  constructor() { }

  ngOnInit(): void {
  }


  elemSeleccionado(){

  }

  cambiarLista(){
    this.tipoListado= this.tipoListado? false:true;
  }
  Detallar(pais){
    console.log("entro?");
    this.unpais=pais;
  }

  mandaLista(lista){
    this.lista=lista;
  }
}
