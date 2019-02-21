import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuerpoComponent } from './cuerpo.component';

const routes: Routes = [
  {path:'',component:CuerpoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuerpoRoutingModule { }
