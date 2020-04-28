import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera'

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PPTComponent implements OnInit {

  eligio=true;
  
  nuevoJuego:JuegoPiedraPapelTijera;
  rutaDeFoto:string;  
  resultado:string;
  ganar: boolean;

  

  constructor() { 
    this.nuevoJuego= new JuegoPiedraPapelTijera();
  }

  ngOnInit(): void {
  }

  jugar(humanoObjeto:string){
    this.nuevoJuego.elegidoMaquina=this.nuevoJuego.generarMaquina();
    this.nuevoJuego.elegidoUsuario=humanoObjeto;
    switch(this.nuevoJuego.elegidoMaquina){
      case "piedra":
        this.rutaDeFoto="./assets/imagenes/piedra.jpg";        
        break;
      case "papel":
        this.rutaDeFoto="./assets/imagenes/papel.jpg";
        break;
        case "tijera":
          this.rutaDeFoto="./assets/imagenes/tijera.jpg";
          break;  
    }    
    this.eligio=false;
    

    if(this.nuevoJuego.verificar()){
      this.resultado="Ganaste!!!";
    }else if (this.nuevoJuego.elegidoUsuario==this.nuevoJuego.elegidoMaquina)
    this.resultado="Empataste!!";
    else
    this.resultado="Perdiste!!";
  }

}
