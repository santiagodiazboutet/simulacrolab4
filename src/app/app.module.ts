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
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ModificacionComponent } from './componentes/modificacion/modificacion.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ComponentePrincipalComponent,
    ComponenteRegionesComponent,
    ComponentePaisesBanderaComponent,
    BienvenidoComponent,
    ListadoComponent,
    BorrarComponent,
    DetalleComponent,
    ModificacionComponent,
    PrincipalComponent,
    ModificarComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [MihttpService,
              PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
