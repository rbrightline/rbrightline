import { Component, input } from '@angular/core';
import { InputCommonModule } from './input-common.module';
import { InputComponent } from './input.component';

import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'rl-input-select',
  standalone: true,
  imports: [InputCommonModule, MatSelectModule],
  template: `
    <!--  -->
    <mat-form-field [formGroup]="formGroupInstance()" class="w-full">
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

      <mat-label>{{ label() }}</mat-label>
      <mat-select [formControl]="formControl" [multiple]="multiple()">
        @for (option of options(); track option) {
        <mat-option [value]="option">{{ option }}</mat-option>
        }
      </mat-select>

      @if(hint()){ <mat-hint>{{ hint() }}</mat-hint>
      }
      <mat-error>{{ error() }}</mat-error>
    </mat-form-field>
  `,
})
export class SelectComponent extends InputComponent {
  multiple = input<boolean>(false);
  options = input.required<string[]>();
  override error() {
    return undefined;
  }
}
