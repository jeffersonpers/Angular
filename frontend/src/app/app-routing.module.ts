import { TreinamentosDetalhesComponent } from './views/treinamentos-detalhes/treinamentos-detalhes.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent }        from './views/login/login.component';
import { HomeComponent }         from './views/home/home.component';
import { TreinamentosComponent } from './views/treinamentos/treinamentos.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "home/treinamento",
    component: TreinamentosComponent
  },
  {
    path: "home/treinamento/:id",
    component: TreinamentosDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
