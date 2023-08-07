import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.model';
import { Endereco } from 'src/app/modelos/endereco.model';
import { CadastroService } from '../cadastro.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['codigo', 'nome', 'cnpj', 'endereco'];
  dataSource: Cliente[] = [];

  constructor(private cadastroService: CadastroService){}

  ngOnInit(): void {
    this.dataSource = this.cadastroService.CLIENTES_DATA;
  }

  ngAfterViewInit(): void {
  }
}
