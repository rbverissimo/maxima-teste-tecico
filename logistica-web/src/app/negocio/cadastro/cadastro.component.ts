import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.model';
import { CadastroService, OperacaoCadastro } from '../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'cnpj', 'endereco'];
  dataSource: Cliente[] = [];

  constructor(private cadastroService: CadastroService, 
    private router: Router, 
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getListaClientes();
  }

  onAdicionarCliente() {
    this.cadastroService.operacaoCadastro = OperacaoCadastro.INSERIR;
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

  private getListaClientes(){
    this.cadastroService.getClientesLista().subscribe(
      data => {
        this.dataSource = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  private getCliente(codigo: number){
    this.cadastroService.getCliente(codigo).subscribe(
      (data: Cliente) => {
        this.cadastroService.entidade = data;
      },
      (error: any) => {
        console.error(error);
      },
      () => {
        if(this.cadastroService.operacaoCadastro === OperacaoCadastro.ALTERAR){
          this.router.navigate(['novo'], {relativeTo: this.route});
        }
      }
    )
  }

  public alterarCliente(codigo: number){
    this.cadastroService.operacaoCadastro = OperacaoCadastro.ALTERAR;
    this.getCliente(codigo);
  }

}
