import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.model';
import { CadastroService, OperacaoCadastro } from '../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'cnpj', 'endereco'];
  dataSource: any = [] ;

  constructor(public cadastroService: CadastroService, 
    private router: Router, 
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.cadastroService.filtro.registrosPorPagina = this.cadastroService.PAGE_SIZE_OPTIONS[0];
    this.getClientesPaginados(this.cadastroService.filtro.pagina, this.cadastroService.filtro.registrosPorPagina);
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

  getNext(event: PageEvent){
    this.cadastroService.filtro.pagina = event.pageIndex;
    this.cadastroService.filtro.registrosPorPagina = event.pageSize;
    this.getClientesPaginados(this.cadastroService.filtro.pagina, this.cadastroService.filtro.registrosPorPagina);

  }

  private getClientesPaginados(pagina: any, registrosPorPagina: any){
    this.cadastroService.getClientesPaginados(pagina, registrosPorPagina).subscribe(
      (data) => {
        this.dataSource = data;
      },
      error => {
        console.error(error);
      }
    );
  }

}
