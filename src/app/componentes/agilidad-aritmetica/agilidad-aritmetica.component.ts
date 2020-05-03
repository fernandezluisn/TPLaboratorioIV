import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { ServiceService } from '../../service.service';
import { Jugador } from '../../clases/jugador';
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  perdio:boolean;

  servicio:ServiceService;
  jugadorR:Jugador;

  private subscription: Subscription;
  ngOnInit() {
    
  }
   constructor() {
     this.ocultarVerificar=true;
     this.perdio=false;
     this.Tiempo=10; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");  
    
    this.servicio=new ServiceService();
    this.jugadorR=this.servicio.traerLogeado();
  }
  NuevoJuego() {
    this.ocultarVerificar=false;
    this.perdio=false;
    this.Tiempo=10; 
    this.nuevoJuego.gano=false;
    this.nuevoJuego.num1=this.nuevoJuego.generarnumero();
    this.nuevoJuego.num2=this.nuevoJuego.generarnumero();
    this.nuevoJuego.operador=this.nuevoJuego.generaroperador();
     switch(this.nuevoJuego.operador){
      case "-":
        this.nuevoJuego.resultado=this.nuevoJuego.num1-this.nuevoJuego.num2;
        break;
      case "+":
        this.nuevoJuego.resultado=this.nuevoJuego.num1+this.nuevoJuego.num2;
        break;
      case "/":
        this.nuevoJuego.resultado=this.nuevoJuego.num1/this.nuevoJuego.num2;
        break;
      case "*":
        this.nuevoJuego.resultado=this.nuevoJuego.num1*this.nuevoJuego.num2;
        break;
     }

   this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=10;
      }
      }, 900);

  }
  verificar()
  {
    this.ocultarVerificar=true;
    clearInterval(this.repetidor);
    this.nuevoJuego.gano=this.nuevoJuego.verificar();
    this.perdio=!(this.nuevoJuego.verificar());

    if( (typeof this.jugadorR !== 'undefined') &&  (this.jugadorR!== null))
    {
      this.nuevoJuego.gano= this.nuevoJuego.verificar();
      this.nuevoJuego.jugador=this.jugadorR.email;
    }else
    {
      this.nuevoJuego.gano= this.nuevoJuego.verificar();
    }

    this.servicio.guardarJuego(this.nuevoJuego);
  }  

}
