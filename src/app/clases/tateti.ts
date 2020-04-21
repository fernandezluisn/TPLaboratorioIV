import { Juego } from './juego';

export class TATETI extends Juego{

    hayGanador: boolean=false; 
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("TaTeTi",gano,jugador);
     
    
      
      }

      public verificar(){

        if(this.hayGanador==true)
        return true;
        else
        return false;
      }
}
