import { Injectable, Input } from '@angular/core';
import { Cliente } from '../modelos/cliente.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_ENDPOINT, PAGE_SIZE_OPTIONS } from '../app.constants';
import { Observable } from 'rxjs';
import { Filtro } from '../interfaces/Filtro.interface';

export class Paginador implements Filtro{
  codigo: number = 0;
  nome: string = '';
  cnpj: string = '';
  endereco: string = ''; 
  pagina: number = 0;

  constructor(public registrosPorPagina: number = PAGE_SIZE_OPTIONS[0]){}
}

export enum OperacaoCadastro {
  INSERIR, ALTERAR, NULL
}

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  @Input() entidade: Cliente = new Cliente('', '');

  filtro: Filtro = new Paginador();

  public operacao = OperacaoCadastro;
  public operacaoCadastro = this.operacao.NULL;

  private apiUrl = API_ENDPOINT;
  public PAGE_SIZE_OPTIONS = PAGE_SIZE_OPTIONS;


  constructor(private http: HttpClient) { }

  salvar(operacaoCadastro: OperacaoCadastro, entidade: Cliente): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if(operacaoCadastro === OperacaoCadastro.INSERIR){
      return this.http.post(this.apiUrl + "/api/cliente", 
      JSON.stringify(entidade), 
      {headers: headers});

    } else {
      return this.http.put(this.apiUrl + "/api/cliente", 
      JSON.stringify(entidade), 
      {headers: headers});

    }

  }

  getCliente(codigo: number): any {
    return this.http.get(this.apiUrl + "/api/cliente" + `/${codigo}`);
  }

  getClientesLista(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl + '/api/cliente/lista');
  }

  getClientesPaginados(pagina: any, registrosPorPagina: any): Observable<Cliente[]>{
    const params = {
      pagina: pagina,
      registrosPorPagina: registrosPorPagina,
    };

    return this.http.get<Cliente[]>(this.apiUrl + '/api/cliente/lista-paginada', {params});
  }

  exluir(codigo: number){
    return this.http.delete(this.apiUrl + "/api/cliente" + `/${codigo}`);
  }


}
