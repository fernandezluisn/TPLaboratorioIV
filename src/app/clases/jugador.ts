import { NgAnalyzeModulesHost } from '@angular/compiler';
import { ServiceService } from '../service.service';
import { Juego } from './juego';

export class Jugador {
    email:string;
    clave:string;
    ganados:number;
    perdidos:number;
   

    constructor(email:string, clave:string){
this.clave=clave;
this.email=email;
    
    }
}
