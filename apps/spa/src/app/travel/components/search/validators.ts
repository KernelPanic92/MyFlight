import { NonNullAssert } from '@angular/compiler';
import { AbstractControl, FormControl, FormGroupDirective, NgForm, ValidationErrors } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export function sameAirportValidator(control: AbstractControl): ValidationErrors | null {
  const { arrival, departure } = control.value;

  if (!departure) {
    return null;
  }

  if (departure !== arrival) {
    return null;
  }

  return  { sameAirports: { arrival, departure} };
}

export class SameAirportErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    if (control == null || form == null) {
      return false;
    }


    if (control.pristine) {
      return false;
    }

    return control.invalid || form.hasError('sameAirports');

  }
}
