import { AbstractControl } from '@angular/forms';

export const passwordMatchValidator = (
  controlName: string,
  matchingControlName: string
) => {
  return (group: AbstractControl): { invalidRePassword: boolean } | null => {
    const passwordCtrl: AbstractControl | null = group.get(controlName);
    const passwordConfirmCtrl: AbstractControl | null =
      group.get(matchingControlName);
    if (passwordCtrl && passwordConfirmCtrl) {
      if (passwordConfirmCtrl.touched || passwordConfirmCtrl.dirty) {
        if (passwordCtrl.value !== passwordConfirmCtrl.value) {
          passwordConfirmCtrl.setErrors({ invalidRePassword: true });
          return { invalidRePassword: true };
        }
      }
    }
    return null;
  };
};
