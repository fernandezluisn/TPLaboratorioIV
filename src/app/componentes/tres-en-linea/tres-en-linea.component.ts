import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tres-en-linea',
  templateUrl: './tres-en-linea.component.html',
  styleUrls: ['./tres-en-linea.component.css']
})
export class TresEnLineaComponent implements OnInit {

  ganoO=false;
  ganoX=false;

  constructor() { }

  ngOnInit(): void {
  }
  posiciones=[['-','-','-'],
  ['-','-','-'],
  ['-','-','-']];
jugador='O';


presion(fila:number,columna:number) {
if (this.posiciones[fila][columna]=='-') {
this.posiciones[fila][columna]=this.jugador;
this.verificarGano('X');
this.verificarGano('O');
this.cambiarJugador();
}
}

reiniciar() {
for(let f=0;f<3;f++)
for(let c=0;c<3;c++)
this.posiciones[f][c]='-';

  this.ganoO=false;
  this.ganoX=false;
}

cambiarJugador() {
if (this.jugador=='O')
this.jugador='X';
else
this.jugador='O';    
}

chequear(ficha:string){
  if (ficha=="X")
  this.ganoX=true;
  else
  this.ganoO=true;
}
verificarGano(ficha: string) {
if (this.posiciones[0][0]==ficha && this.posiciones[0][1]==ficha && this.posiciones[0][2]==ficha)
this.chequear(ficha);
if (this.posiciones[1][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[1][2]==ficha)
this.chequear(ficha);
if (this.posiciones[2][0]==ficha && this.posiciones[2][1]==ficha && this.posiciones[2][2]==ficha)
this.chequear(ficha);
if (this.posiciones[0][0]==ficha && this.posiciones[1][0]==ficha && this.posiciones[2][0]==ficha)
this.chequear(ficha);
if (this.posiciones[0][1]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][1]==ficha)
this.chequear(ficha);
if (this.posiciones[0][2]==ficha && this.posiciones[1][2]==ficha && this.posiciones[2][2]==ficha)
this.chequear(ficha);    
if (this.posiciones[0][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][2]==ficha)
this.chequear(ficha);
if (this.posiciones[0][2]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][0]==ficha)
this.chequear(ficha);    
}
}
