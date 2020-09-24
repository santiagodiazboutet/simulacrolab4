import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePrincipalComponent } from './componentes/componente-principal/componente-principal.component';
import { ComponenteRegionesComponent } from './componentes/componente-regiones/componente-regiones.component';
import { ComponentePaisesBanderaComponent } from './componentes/componente-paises-bandera/componente-paises-bandera.component';
import { MihttpService } from "./Servicios/mihttp.service";
import { PaisesService } from "./Servicios/paises.service";
@NgModule({
  declarations: [
    AppComponent,
    ComponentePrincipalComponent,
    ComponenteRegionesComponent,
    ComponentePaisesBanderaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [MihttpService,
              PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
