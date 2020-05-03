import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from '../../clases/jugador';
import { stringify } from 'querystring';
import { ServiceService } from '../../service.service';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  servicio:ServiceService;
  clave:string;
  clav2:string;
  email:string;
  coinciden:boolean;
  yaExiste:boolean;
 /* constructor( private miConstructor:FormBuilder) { }
  email=new FormControl('',[Validators.email]);
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.email
  });*/
  constructor(private router: Router ) { 
    this.servicio=new ServiceService();
    this.coinciden=true;
    this.yaExiste=true;
    
  }

  ngOnInit() {
  }
   
  acepto(){
    this.coinciden=true;
    this.yaExiste=true;
  }
  registrar(mail:string, clave1:string, clave2:string){
    if(clave1===clave2)
    {
      this.yaExiste=(this.servicio.registrarJugador(mail, clave2));
      if (this.yaExiste==true)
      this.router.navigate(['/']);
    }else{
      this.coinciden=false;
    }
  }
}
