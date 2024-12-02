import { Component, input } from '@angular/core';
import { InputCommonModule } from './input-common.module';
import { InputComponent } from './input.component';

@Component({
  selector: 'rl-input-number',
  standalone: true,
  imports: [InputCommonModule],
  template: `
    <mat-form-field [formGroup]="formGroup()">
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
        <span> ( {{ min() }}/{{ value() || 0 }}/{{ max() }} )</span>
      </mat-label>

      <input
        type="number"
        matInput
        [formControl]="formControl"
        [(ngModel)]="value"
        [name]="name()"
        [required]="required()"
        [min]="min()"
        [max]="max()"
        autocomplete="off"
      />
      <!--  -->
      @if(hint()){ <mat-hint>{{ hint() }}</mat-hint>
      }
      <mat-error>{{ error() }}</mat-error>
    </mat-form-field>
  `,
})
export class InputNumberComponent extends InputComponent {
  min = input<number>(Number.MIN_SAFE_INTEGER);
  max = input<number>(Number.MAX_SAFE_INTEGER);

  override error() {
    const errors = this.formControl.errors as any;
    const name = this.name();

    if (errors) {
      if (errors.required) {
        return `${name} is requried!`;
      } else if (errors.min) {
        return `${name} should be more than${this.min()}`;
      } else if (errors.max) {
        return `${name} should be less than ${this.max()}`;
      }

      return `Invalid input`;
    }

    return undefined;
  }
}
