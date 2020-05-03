import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Juego } from '../../clases/juego';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
   servicio:ServiceService;
   listaR:Juego[];

  constructor() {
    this.servicio=new ServiceService();
    this.listaR=new Array();
    this.listaR=this.servicio.traerResultados();
  }
  
  ngOnInit() {
    
  }

  

  

  perdedores(){
    let lista:Juego[];    
    lista=this.servicio.traerResultados();
    
    this.listaR=lista.filter(Juego=> Juego.gano==false);
    
    

    console.log(this.listaR);
  }

  ganadores(){
    let lista:Juego[];    
    lista=this.servicio.traerResultados();
    
    this.listaR=lista.filter(Juego=> Juego.gano==true);

    

    console.log(this.listaR);
  }

  todos(){
    let lista:Juego[];    
    lista=this.servicio.traerResultados();
    this.listaR=lista;
  }
}
