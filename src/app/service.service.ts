import { Injectable } from '@angular/core';
import { Jugador } from './clases/jugador';
import { Juego } from './clases/juego';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  listaJ:string;
  listaResultados:string;

  constructor() { 
    this.listaJ="listaJugadores";
    this.listaResultados="listaResultados";
  }
  

  ///////////////////Login y registro//////////////////////////////////////
  checkListaJ(jugadores:Jugador[], email:string, pass:string):boolean{
    let respuesta=false;
    jugadores.forEach(element=>{
      if(email==element.email && pass==element.clave)
      {
        respuesta=true;        
      }
    });
    return respuesta;
  }

  traerLogeado():Jugador{
    let j=JSON.parse(localStorage.getItem("jugadorLogeado"));
    return j;
  }

  iniciarJugador(email:string, pass:string):boolean{
    let jugadoresV:Jugador[];
    jugadoresV=JSON.parse(localStorage.getItem(this.listaJ)); 
    
    let respuesta=this.checkListaJ(jugadoresV, email, pass);

    if(respuesta==true)
    {
      jugadoresV.forEach(element=>{
        if(email==element.email && pass==element.clave)
        {
          localStorage.removeItem("jugadorLogeado");
          localStorage.setItem("jugadorLogeado", JSON.stringify(element));              
        }
      });
    }    
    
    return respuesta;
  }

  registrarJugador(mail:string, pass:string):boolean{
    
    let jugadoresV:Jugador[];
    
    let jugadorN=new Jugador(mail, pass);

    jugadoresV=JSON.parse(localStorage.getItem(this.listaJ));
    
    if( (typeof jugadoresV !== 'undefined') &&  (jugadoresV!== null))
    {            
      if(this.checkListaJ(jugadoresV, mail, pass)==false)
      {
        localStorage.removeItem(this.listaJ);      
        jugadoresV.push(jugadorN);        
      }else{
        return false;
      }
      
    }else{
      jugadoresV=new Array();
      jugadoresV.push(jugadorN);      
    }
    
    localStorage.setItem(this.listaJ, JSON.stringify(jugadoresV));
    return true;
  }

  traerJugadores():Jugador[]{
    let jugadoresV:Jugador[];
    jugadoresV=JSON.parse(localStorage.getItem(this.listaJ)); 
    return jugadoresV;
  }

  ///////////////Listados///////////////////

  traerResultados():Juego[]{
    let jugadoresV:Juego[];
    jugadoresV=JSON.parse(localStorage.getItem(this.listaResultados)); 
    return jugadoresV;
  }

  guardarJuego(juego:Juego){
    let juegosV=this.traerResultados();

    if( (typeof juegosV !== 'undefined') &&  (juegosV!== null))
    {
      localStorage.removeItem(this.listaResultados);      
        juegosV.push(juego);  
        localStorage.setItem(this.listaResultados,JSON.stringify(juegosV));
    }else
    {
      juegosV=new Array();
      juegosV.push(juego);  
        localStorage.setItem(this.listaResultados,JSON.stringify(juegosV));
    }
  }
}
