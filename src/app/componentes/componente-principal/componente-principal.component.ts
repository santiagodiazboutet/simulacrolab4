import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MihttpService } from 'src/app/Servicios/mihttp.service';

@Component({
  selector: 'app-componente-principal',
  templateUrl: './componente-principal.component.html',
  styleUrls: ['./componente-principal.component.css']
})
export class ComponentePrincipalComponent implements OnInit {
  listaPaises:Array<any>;
  @Input() TipoLista:boolean;
  @Output() mandaPais:EventEmitter<any>;
  @Output() mandaLista:EventEmitter<any>;
  constructor(private httpservice:MihttpService) {
    this.httpservice.obtenerPaises("https://restcountries.eu/rest/v2/region/africa").subscribe((paises: any) => {
      this.listaPaises=paises;
    }, error => {
      console.log('Error');
    });
      this.mandaPais=new EventEmitter<any>();
      this.mandaLista=new EventEmitter<any>();
  }

  ngOnInit(): void {

  }

  regionSeleccionada(hola:String){
    console.log(hola)
    this.httpservice.obtenerPaises("https://restcountries.eu/rest/v2/region/"+hola).subscribe((paises: any) => {
      console.log(hola);
      this.listaPaises=paises;
    }, error => {
      console.log('Error');
    });
  }
  seleccionaPais(pais){
    this.mandaLista.emit(this.listaPaises);
    this.mandaPais.emit(pais);
  }
}
