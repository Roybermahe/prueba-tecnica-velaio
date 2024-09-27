import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {AgregarTareaComponent} from "../../components/agregar-tarea/agregar-tarea.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private dialog: Dialog
  ) {}

  openDialog() {
    this.dialog.open(AgregarTareaComponent);
  }
}
