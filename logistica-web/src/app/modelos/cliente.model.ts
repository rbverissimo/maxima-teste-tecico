import { Endereco } from "./endereco.model";


export class Cliente {

      public codigo: number = 0;
      public nome: string = '';
      public cnpj: string = '';
      public endereco: Endereco = new Endereco(0, '', '', '');

      constructor(){}
      
}