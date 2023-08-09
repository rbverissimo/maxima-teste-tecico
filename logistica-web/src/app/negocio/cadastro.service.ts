import { Injectable, Input } from '@angular/core';
import { Cliente } from '../modelos/cliente.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from '../app.constants';
import { Observable } from 'rxjs';

export interface Filtro {
  codigo: number;
  nome: string;
  cnpj: string;
  endereco: string;
  pagina: number;
}

export enum OperacaoCadastro {
  INSERIR, ALTERAR, NULL

}

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  @Input() entidade: Cliente = new Cliente('', '');

  public operacao = OperacaoCadastro;
  public operacaoCadastro = this.operacao.NULL;

  private apiUrl = API_ENDPOINT;

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

  exluir(codigo: number){
    return this.http.delete(this.apiUrl + "/api/cliente" + `/${codigo}`);
  }


}
