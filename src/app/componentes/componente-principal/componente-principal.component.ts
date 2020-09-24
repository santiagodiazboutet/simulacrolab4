import { Component, OnInit } from '@angular/core';
import { MihttpService } from 'src/app/Servicios/mihttp.service';

@Component({
  selector: 'app-componente-principal',
  templateUrl: './componente-principal.component.html',
  styleUrls: ['./componente-principal.component.css']
})
export class ComponentePrincipalComponent implements OnInit {
  listaPaises:Array<any>;
  constructor(private httpservice:MihttpService) {
    this.httpservice.obtenerPaises("https://restcountries.eu/rest/v2/all").subscribe((paises: any) => {
      this.listaPaises=paises;
    }, error => {
      console.log('Error');
    });
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
}
