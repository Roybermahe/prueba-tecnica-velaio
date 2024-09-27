import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import {AgregarTareaComponent} from "../../components/agregar-tarea/agregar-tarea.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AgregarTareaComponent,
    DialogModule
],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
