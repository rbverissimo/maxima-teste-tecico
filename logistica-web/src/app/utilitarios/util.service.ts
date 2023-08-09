import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor(){}

    public isNullOuUndefined(objeto: any): boolean {
        return !(objeto === null || objeto === undefined)
    }

    public isErrosEncontrados(data: any): boolean {
        if (this.isNullOuUndefined(data)) {
            return true;
        }
        if (('ocorreuErro' in data) && (data['ocorreuErro'] === true)) {
            return true;
        }
        return false;
    }
}