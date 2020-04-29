import { Juego } from '../clases/juego'

export class JuegoAnagrama extends Juego{
    
    

    listaPalabras=[{p1:"pareas", lista:{p2:"",p3:"",p4:""}},
    {p1:"pareas", lista:{p2:"",p3:"",p4:""}},
    {p1:"pareas", lista:{p2:"",p3:"",p4:""}}
];

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",gano,jugador);
     
    
      
      }
    
    public verificar(): boolean {
        throw new Error("Method not implemented.");
    }
}
