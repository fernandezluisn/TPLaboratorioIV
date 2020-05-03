import { Juego } from './juego';
import { Pais } from './pais';

export class JuegoPaises extends Juego{
    
    paisE:string;
    paisS:Pais;

    constructor(nombre?:string, gano?:boolean, jugador?:string){
        super("Paises", gano, jugador);

    }
    
    public verificar(): boolean {
        if(this.paisE==this.paisS.nombre)
        return true;
        else 
        return false;
    }
    
}