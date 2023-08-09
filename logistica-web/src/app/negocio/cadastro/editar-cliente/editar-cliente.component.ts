import { Component, OnInit } from '@angular/core';
import { CadastroService, OperacaoCadastro } from '../../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente.model';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  listaErros = [];
  ocorreuErro: boolean = false;

  ehAlterar: boolean = false;

  constructor(public cadastroService: CadastroService, 
    private router: Router, private route: ActivatedRoute){}

    ngOnInit(): void {
      if(this.cadastroService.operacaoCadastro === OperacaoCadastro.ALTERAR){
        this.ehAlterar = true;
      }
    }

  onCancelarClick() {
    this.router.navigate(['cadastro']);
    this.cadastroService.entidade = new Cliente();
  }

  refreshLista(){
    this.cadastroService.getClientesLista();
  }

  onSalvarClick(entidade: Cliente){
    console.log(entidade);
    this.cadastroService.salvar(this.cadastroService.operacaoCadastro, entidade).subscribe(
      data => {
        console.log(data);
        this.adicionarClick();
      }, 
      error => {
        console.error(error);
      },
      () => {
        this.onCancelarClick();
      }
    );
  }

  onExcluirClienteClick(codigo: number){
    this.cadastroService.exluir(codigo).subscribe(
      data => {
        this.onCancelarClick();
      }, error => { 
        console.error(error); 
      }
    )
  }

  adicionarClick(){
    this.cadastroService.entidade = new Cliente();
  }

}
