import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {ListaTareasComponent} from "./lista-tareas/lista-tareas.component";

const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: '', component: HomeComponent, children: [{ path: 'tareas', component: ListaTareasComponent }] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
