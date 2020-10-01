import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentePrincipalComponent } from './componentes/componente-principal/componente-principal.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: '' , component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
