import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.model';
import { Endereco } from 'src/app/modelos/endereco.model';
import { CadastroService } from '../cadastro.service';
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
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

  private getListaClientes(){
    this.cadastroService.getClientesLista().subscribe(
      data => {
        console.log(data);
        this.dataSource = data;
      },
      error => {
        console.error(error);
      }
    );
  }

}
