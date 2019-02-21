import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { LoginComponent } from './login/login.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './home/footer/footer.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  //lo que se quiere es que cargue slide y menum, cuando se carge home
   {path:'home',component:HomeComponent,children:[
    {path:'menu',component:MenuComponent},
    {path:'footer',component:FooterComponent},
    {path:'cuerpo',loadChildren:'./cuerpo/cuerpo.module#CuerpoModule'},
    {path:'slide',loadChildren:'./slide/slide.module#SlideModule'}
 ]},
  {path:'login',loadChildren:'./login/login.module#LoginModule'},//debe estar creado el modulo
  {path:'galeria',component:GaleriaComponent},
  {path:'noticia',component:NoticiaComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'},
  {path:'*not-fount',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
