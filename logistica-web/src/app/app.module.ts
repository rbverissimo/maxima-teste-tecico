import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './negocio/cadastro/cadastro.component';
import { EditarClienteComponent } from './negocio/cadastro/editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
