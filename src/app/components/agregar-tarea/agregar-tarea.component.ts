import { Component } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {DialogModule, DialogRef} from "@angular/cdk/dialog";
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {nombreDuplicadoValidator, validarFechaMinima, verificarNombre} from "./custom.validators";
import {TareaService} from "../../../services/tareas.service";
import {ITareas} from "../../../models/tareas.interface";

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [CommonModule, DialogModule, ReactiveFormsModule, DatePipe],
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent {

  today = new Date();
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private tareaService: TareaService,
    private dialog: DialogRef
  ) {
    this.form = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(5), Validators.pattern(/^\S.*\S$/), verificarNombre(this.tareaService, false)]],
      estado: ['PENDIENTE', [Validators.required]],
      fecha: ['', [Validators.required, validarFechaMinima]],
      personas: this.fb.array([], [Validators.required, Validators.minLength(1), nombreDuplicadoValidator])
    });
  }

  get personasArr() {
    return this.form.get('personas') as FormArray;
  }

  habilidadesArr(index: number) {
    return this.personasArr.controls[index].get('habilidades') as FormArray;
  }

  formPersona(nombre='', edad='', habilidades=[]): FormGroup {
    return this.fb.group({
      nombre: [nombre,[Validators.required, Validators.minLength(5), Validators.pattern(/^\S.*\S$/)]],
      edad: [edad, [Validators.required,Validators.min(18)]],
      habilidades: this.fb.array(habilidades, [Validators.required, Validators.minLength(1), nombreDuplicadoValidator]) // valida que el nombre de las habilidades de una persona no este duplicado
    });
  }

  formHabilidades(habilildad = '') {
    return this.fb.group({
      nombre: [habilildad, [Validators.required, Validators.minLength(1)]],
    })
  }

  asociarPersona() {
    this.personasArr.push(this.formPersona());
  }

  onClose() {
    this.dialog.close();
  }

  agregarHabilidad(index: number) {
    this.habilidadesArr(index).push(this.formHabilidades())
  }

  borrarHabilidad(i: number, j: number) {
    this.habilidadesArr(i).removeAt(j);
  }

  borrarPersona(index: number) {
    this.personasArr.removeAt(index);
  }

  guardarTarea() {
    this.tareaService.guardar(this.form.value as ITareas);
    this.form.reset({
      estado: 'PENDIENTE'
    });
  }
}
