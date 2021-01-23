import { RegexValidator } from 'src/app/constants/global-const';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export class ValidatorService extends Validators {
  /**
   * Validate selected
   * Returns the validation result if enabled, otherwise null.
   */
  static selectRequired(ctrl: AbstractControl): ValidationErrors {
    if (!ctrl || !ctrl.value) {
      return { selectRequired: true };
    }
    return null as any;
  }

  /**
   * Validate date
   * Returns the validation result if enabled, otherwise null.
   */
  static dateRequired(ctrl: AbstractControl): ValidationErrors {
    if (!ctrl || !ctrl.value) {
      return { dateRequired: true };
    }
    return null as any;
  }

  /**
   * Validate number
   * Returns the validation result if enabled, otherwise null.
   */
  static isNumber(ctrl: AbstractControl): ValidationErrors {
    if (
      ctrl.value &&
      !ctrl.value.toString().match(RegexValidator.numberOnlyRegex)
    ) {
      return { isNumber: true };
    }
    return null as any;
  }

  /**
   * Validate email
   * Returns the validation result if enabled, otherwise null.
   */
  static email(ctrl: AbstractControl): ValidationErrors {
    if (ctrl.value && !ctrl.value.toString().match(RegexValidator.emailRegex)) {
      return { email: true };
    }
    return null as any;
  }

  /**
   * Validate min
   * Returns the validation result if value fewer than @min, otherwise null.
   */
  static min(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const b = +control.value;
      if (b < min) {
        return { min: true };
      }
      return null as any;
    };
  }

  /**
   * Validate isTelepphoneNumber
   * Returns the validation result if enabled, otherwise null.
   */
  static isTelNumber(maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const b = control.value;
      if (b.length > maxLength) {
        return { isTelNumber: true, length: maxLength };
      }
      return null as any;
    };
  }
}
