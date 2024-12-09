import { Component, input } from '@angular/core';
import { InputCommonModule } from './input-common.module';
import { InputComponent } from './input.component';

export type InputStatus = 'valid' | 'invalid' | undefined;

@Component({
  selector: 'rl-input-text',
  standalone: true,
  imports: [InputCommonModule],
  template: `
    <mat-form-field [formGroup]="formGroupInstance()">
      <!--  -->
      @if(prefixText()){ <span matTextPrefix> {{ prefixText() }} </span>}

      <!--  -->
      @if(suffixText()){ <span matTextSuffix> {{ suffixText() }} </span>}

      <!--  -->
      @if(prefixIcon()) {
      <mat-icon matIconPrefix> {{ prefixIcon() }} </mat-icon>}

      <!--  -->
      @if(suffixIcon()) {
      <mat-icon matIconSuffix> {{ suffixIcon() }} </mat-icon>}

      <!--  -->

      <mat-label>
        {{ label() }}
        <span>
          ( {{ minLength() }}/{{ value()?.length || 0 }}/{{
            maxLength()
          }}
          )</span
        >
      </mat-label>

      <input
        type="text"
        matInput
        [formControlName]="name()"
        [name]="name()"
        [required]="required()"
        [minLength]="minLength()"
        [maxLength]="maxLength()"
        autocomplete="off"
      />

      @if(hint()){ <mat-hint>{{ hint() }}</mat-hint>
      }
      <mat-error>{{ error() }}</mat-error>
    </mat-form-field>
  `,
})
export class InputTextComponent extends InputComponent {
  minLength = input<number>(0);
  maxLength = input<number>(1000);

  override error() {
    const errors = this.formControl.errors as any;
    const name = this.name();

    if (errors) {
      if (errors.required) {
        return `${name} is requried!`;
      } else if (errors.minlength) {
        return `${name} should be longer than or equal to ${this.minLength()} characters!`;
      } else if (errors.maxlength) {
        return `${name} should be shorter than or equal to ${this.maxLength()} characters!`;
      } else if (errors.email) {
        return `${name} should be an email!`;
      }
      return `Invalid input`;
    }

    return undefined;
  }
}
