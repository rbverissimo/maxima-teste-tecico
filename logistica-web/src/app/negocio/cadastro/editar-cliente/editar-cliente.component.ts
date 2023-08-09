import { Component } from '@angular/core';
import { CadastroService } from '../../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente.model';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

  constructor(public cadastroService: CadastroService, 
    private router: Router, private route: ActivatedRoute){}

  onCancelarClick() {
    this.router.navigate(['cadastro']);
  }

  refreshLista(){
    this.cadastroService.getClientesLista();
  }

  onSalvarClick(entidade: Cliente){
    this.cadastroService.salvar(entidade).subscribe(
      data => {
        console.log(data);
      }, 
      error => {
        console.error(error);
      }
    );

  }

}
