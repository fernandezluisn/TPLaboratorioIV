import { Component, OnInit, Input } from '@angular/core';
import {JuegoAnagrama} from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  anagrama:string=null;
  respuesta:string=null;
  verTiempo=false;
  nuevoJuego:JuegoAnagrama;
  Tiempo: number;
  contadorPuntos: number;
  perdedor=true;
  ganador=true;

  constructor() { 
    this.Tiempo=10;
    this.nuevoJuego = new JuegoAnagrama();
  }

  desarmarPalabra(){
    let array=this.nuevoJuego.palabraSorteada.split("");
    let muestra=array.sort();
    
    this.anagrama=muestra.join("");
    console.log(this.nuevoJuego.palabraSorteada);
  }
  
  ngOnInit() {
    this.nuevoJuego.elegirPalabra();
    this.desarmarPalabra();
  }
  
  repetidor: any = setInterval(()=>{       
    this.Tiempo--;
    
    if(this.Tiempo==0 ) {
          
      this.verTiempo=true;
    }
    }, 900);

    reiniciar() {
      this.Tiempo=10;      
      this.verTiempo=false;     
      this.nuevoJuego.elegirPalabra();
      this.desarmarPalabra();
      this.perdedor=true;
      this.ganador=true;
      }
  
    Ingresar(resp:string){
      this.nuevoJuego.palabraIngresada=resp;
    this.ganador=!this.nuevoJuego.verificar();
    this.perdedor=!this.ganador;
    this.verTiempo=true;
  }
}
