import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
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

  

  private subscription: Subscription;
  ngOnInit() {
    
  }
   constructor() {
     this.ocultarVerificar=true;
     this.perdio=false;
     this.Tiempo=10; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");  
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
  }  

}
