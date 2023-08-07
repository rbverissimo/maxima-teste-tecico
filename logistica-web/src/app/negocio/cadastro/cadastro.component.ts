import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.model';
import { Endereco } from 'src/app/modelos/endereco.model';


const CLIENTES_DATA: Cliente[] = [
  new Cliente(
    1, 
    'Plásticos Melhoramentos', 
    '00.000.000/0000-00', 
    new Endereco(1, 'Rua 1', '74200-000', 'ED BUSINESS')
  ),
  new Cliente(
    2,
    'Lâmpadas Eletrônicos',
    '11.111.111/111-11',
    new Endereco(1, 'Rua 1', '74200-000', 'ED JAVA BUSINESS')
  ),
  new Cliente(
    3,
    'Acabamentos Soares',
    '12.333.123/100-00',
    new Endereco(1, 'Rua 4', '74200-130', '')
  ),
    new Cliente(
    7,
    'Assessoria Maxima',
    '17.145.133/027-81',
    new Endereco(1, 'Rua 1', '74200-000', 'ED BUSINESS')
  )
];

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['codigo', 'nome', 'cnpj', 'endereco'];
  dataSource = CLIENTES_DATA;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    console.log(this.dataSource);
  }
}
