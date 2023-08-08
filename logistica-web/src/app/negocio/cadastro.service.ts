import { Injectable, Input } from '@angular/core';
import { Cliente } from '../modelos/cliente.model';
import { Endereco } from '../modelos/endereco.model';
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

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  @Input() entidade: Cliente = new Cliente();

  private apiUrl = API_ENDPOINT;

  constructor(private http: HttpClient) { }

  salvar(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl + '/cliente', data, {headers});
  }


}
