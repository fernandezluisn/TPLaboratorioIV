import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { JuegoAnagrama } from '../../clases/juego-anagrama';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  servicio:ServiceService;
  juego:JuegoAnagrama;

  constructor() { 
    this.servicio=new ServiceService();
      
   }

  ngOnInit() {
    this.servicio.registrarJugador("admin@admin.com", "1234");
    this.servicio.registrarJugador("Invitado", "");   
  }

 

}
