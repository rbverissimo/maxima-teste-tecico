import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './negocio/cadastro/cadastro.component';
import { EditarClienteComponent } from './negocio/cadastro/editar-cliente/editar-cliente.component';
import { PaginaNaoEncontradaComponent } from './negocio/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HeaderComponent } from './negocio/header/header.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    EditarClienteComponent,
    PaginaNaoEncontradaComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
