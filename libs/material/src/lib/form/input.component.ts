import { Component, input, model } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'rl-input',
  standalone: true,
  template: '',
})
export class InputComponent<T = string> {
  submitted = model<boolean>(false);

  name = input.required<string>();
  label = input<string>('');
  prefixIcon = input<string>('');
  suffixIcon = input<string>('');
  prefixText = input<string>('');
  suffixText = input<string>('');
  hint = input<string>('');

  // Value
  value = model<T | null>(null);

  formGroup = input<FormGroup>(new FormGroup({}));

  formControl = new FormControl<T | null>(null, []);

  errorMessage = input<string>('Input is invalid');

  required = input<boolean>(true);

  error(): string | undefined | null {
    throw new Error('Not implemented!');
  }
}
