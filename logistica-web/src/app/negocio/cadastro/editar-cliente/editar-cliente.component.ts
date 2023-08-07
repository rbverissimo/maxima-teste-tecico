import { Component } from '@angular/core';
import { CadastroService } from '../../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';

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

}
