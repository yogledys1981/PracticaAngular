import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yogle';
  ciudad = 'Ambato';
   n1=4;
   n2=5;
   res=this.n1+this.n2;
   msj=`Hola mi nombre es ${this.title} y vivo en ${this.ciudad}`;
   msj2='hola "con comilla"'+this.title;
   msj3='hola "'+this.title+'"';



}
