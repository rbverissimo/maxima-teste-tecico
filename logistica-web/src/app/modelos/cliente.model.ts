import { Endereco } from "./endereco.model";


export class Cliente {
      constructor(public codigo: number, 
            public nome: string, 
            public cnpj: string, 
            public endereco: Endereco){}
      
}