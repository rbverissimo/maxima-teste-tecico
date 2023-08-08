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

  constructor(private cadastroService: CadastroService, 
    private router: Router, private route: ActivatedRoute){}

  onCancelarClick() {
    this.router.navigate(['cadastro']);
  }

  onSalvarClick(entidade: Cliente){
    this.cadastroService.salvar(entidade).subscribe(
      data => {
        
      }, 
      error => {
        console.error(error);
      }
    );

  }

}
