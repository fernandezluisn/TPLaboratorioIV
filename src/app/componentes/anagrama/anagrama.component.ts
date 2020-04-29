import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  anagrama:string=null;
  respuesta:string=null;
  verTiempo=false;
  
  Tiempo: number;
  contadorPuntos: number;

  constructor() { 
    this.Tiempo=30;
  }


  
  ngOnInit() {
  }
  
  repetidor: any = setInterval(()=>{       
    this.Tiempo--;
    
    if(this.Tiempo==0 ) {
          
      this.verTiempo=true;
    }
    }, 900);

    reiniciar() {
      this.Tiempo=30;      
      this.verTiempo=false;     
     
      }
  
    Ingresar(resp:string){
    console.log(resp);
  }
}
