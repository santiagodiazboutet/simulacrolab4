import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentePrincipalComponent } from './componentes/componente-principal/componente-principal.component';

const routes: Routes = [
  {path: '' , component: ComponentePrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
