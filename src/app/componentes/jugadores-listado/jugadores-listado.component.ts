import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Jugador } from '../../clases/jugador';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:Jugador[];
  servicio:ServiceService;
  ganados:number;
  perdidos:number;
  
    constructor() {
      this.servicio=new ServiceService();
      this.listado=this.servicio.traerJugadores();
      console.log(this.listado);
      
    }
    


  ngOnInit() {
    this.listado.forEach(jugador=>{
      let l=new Array();
      
      l=this.servicio.traerResultados();

      jugador.ganados=(l.filter(a=>a.jugador==jugador.email)).filter(a=>a.gano==true).length;
      jugador.perdidos=(l.filter(a=>a.jugador==jugador.email)).filter(a=>a.gano==false).length;
    })
      
  }


  

}
