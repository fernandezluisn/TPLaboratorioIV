import { Juego } from '../clases/juego'

export class JuegoAnagrama extends Juego{
    
    
    palabraSorteada:string;
    palabraIngresada:string;
    
    lista={p1:"sortija", p2:"portero",p3:"patria",p4:"carro", p5:"astronauta",p6:"atardecer", p7:"ministro", p8:"maestro", p9:"espera", p10:"piojo", 
    p11:"regresar", p12:"patear",p13:"artero",p14:"cavilar", p15:"anidar",p16:"santería", p17:"monasterio", p18:"calambre", p19:"aspero", p20:"ventrilocuo",
    p21:"asterisco", p22:"cansancio", p23:"bizantino", p24:"arandano", p25:"artesano", p26:"horóscopo", p27:"ballena", p28:"militar", p29:"ordenar", p30:"dirigir",
    p31:"cardenal", p32:"amerita", p33:"corso", p34:"serializar"};   
    

   


    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",gano,jugador);
     
    
      
      }

      elegirPalabra(){
        for(let i=0; i<=Math.floor((Math.random()*100)+1); i++)
        {
            this.palabraSorteada=this.lista["p"+i];            
        }
        
      }
    
    public verificar(): boolean {        
        if(this.palabraIngresada.toLowerCase()==this.palabraSorteada)
        return true;
        else
        return false;
    }
}
