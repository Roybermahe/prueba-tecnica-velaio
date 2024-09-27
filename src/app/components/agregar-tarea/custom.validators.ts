import {AbstractControl, FormArray, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";
import {TareaService} from "../../../services/tareas.service";

export const nombreDuplicadoValidator: ValidatorFn = (control):  ValidationErrors | null => {
  if(!(control instanceof FormArray)) return null;

  const nombres = control.controls.map((control) => (control as FormGroup).controls['nombre']?.value?.toLowerCase());

  const nombresUnicos = new Set<string>(nombres);

  return nombresUnicos.size == nombres.length ? null: { nombreDuplicado: true }
}

export const validarFechaMinima:ValidatorFn = (control): ValidationErrors | null => {
  if(!control.value) {
    return null;
  }

  const hoy = new Date();
  hoy.setHours(0, 0 , 0 ,0);

  const date = ((control.value) as string).split('-');

  const selectedDate = new Date(+date[0], +date[1] - 1, +date[2]);
  selectedDate.setHours(0,0,0,0,);

  return selectedDate >= hoy ? null : { minDateToday: true }
}

export function verificarNombre(tareaService: TareaService, editando = false): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null  => {
    if(!control.value) {
      return null;
    }

    if(editando) {
      control.disable()
      return null;
    }
    const nombreExistente = tareaService.checkNombreTarea(control.value);
    return nombreExistente ? { nombreExistente: true }: null;
  }
}
