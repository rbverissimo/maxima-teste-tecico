import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './negocio/cadastro/cadastro.component';
import { EditarClienteComponent } from './negocio/cadastro/editar-cliente/editar-cliente.component';
import { PaginaNaoEncontradaComponent } from './negocio/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path: '', redirectTo: '/cadastro', pathMatch: 'full'},
  {path: 'cadastro', component: CadastroComponent, children: [
    {path: 'novo', component: EditarClienteComponent }
  ]},
  {path: 'nao-encontrado', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: '/nao-encontrado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
