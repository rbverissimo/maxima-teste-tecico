import { Endereco } from "./endereco.model";


export class Cliente {

      public codigo: number = 0;
      public endereco: Endereco = new Endereco(0, '', '', '', 0);

      constructor(
            public nome: string, 
            public cnpj: string){}
      
}