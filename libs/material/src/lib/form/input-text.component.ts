import { Component, input, model, OnInit } from '@angular/core';
import { InputCommonModule } from './input-common.module';

export type InputStatus = 'valid' | 'invalid' | undefined;

@Component({
  selector: 'rl-input-text',
  standalone: true,
  imports: [InputCommonModule],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ label() || name() }}</mat-label>

      <input type="text" matInput />
    </mat-form-field>
  `,
})
export class InputTextComponent implements OnInit {
  name = input.required<string>();
  label = input<string>();

  prefixIcon = input<string>('info');
  suffixIcon = input<string>('info');

  prefixText = input<string>('...');
  suffixText = input<string>('...');

  hint = input<string>('...');

  // Value
  value = model<string>('');

  // Validation
  valid = model<boolean | undefined>(undefined);
  invalid = model<boolean | undefined>(undefined);
  errorMessage = input<string>();

  required = input<boolean>(true);
  minLength = input<number>(0);
  maxLength = input<number>(100);

  ngOnInit(): void {
    this.value.subscribe((value) => console.log('Input Value: ' + value));
  }
}
