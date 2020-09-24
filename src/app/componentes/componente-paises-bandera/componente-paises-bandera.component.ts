import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-paises-bandera',
  templateUrl: './componente-paises-bandera.component.html',
  styleUrls: ['./componente-paises-bandera.component.css']
})
export class ComponentePaisesBanderaComponent implements OnInit {
  @Input() cosas:any;
  constructor() { }

  ngOnInit(): void {
  }

}
