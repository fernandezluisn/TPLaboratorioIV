import { Juego } from './juego';

export class JuegoAgilidad extends Juego{
       
    public numeroIngresado: number;
    public gano:boolean;
    operador: String;
    num1: number;
    num2: number;
    resultado:number;

    constructor(nombre?:string, gano?:boolean, jugador?:string){
        super("Agilidad", gano, jugador);

    }

    generarnumero():number {
         
        let numeroSecreto = Math.floor((Math.random() * 100) + 1);
        return numeroSecreto;
      }

      generaroperador():String {
        
        let oper:string;
        let numeroSecreto = Math.floor((Math.random() * 4) + 1);
        switch(numeroSecreto){
            case 1:
            oper="+";
            break;
            case 2:
            oper="-";
            break;
            case 3:
            oper="/";
            break;
            case 4:
            oper="*";
            break;
        }
        return oper;
      }

    public verificar(): boolean {
        if(this.resultado==this.numeroIngresado)
        return true;
        else return false;
    }
}
