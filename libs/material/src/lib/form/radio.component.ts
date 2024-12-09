import { Component, input } from '@angular/core';
import { InputCommonModule } from './input-common.module';
import { InputComponent } from './input.component';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'rl-input-radio',
  standalone: true,
  imports: [InputCommonModule, MatRadioModule],
  template: `
    <section [formGroup]="formGroupInstance()">
      <mat-radio-group
        [(ngModel)]="value"
        [formControl]="formControl"
        [required]="required()"
      >
        @for (option of options(); track $index) {
        <mat-radio-button [value]="option">{{ option }}</mat-radio-button>
        }
      </mat-radio-group>
    </section>
  `,
})
export class RadioComponent extends InputComponent {
  options = input.required<string[]>();

  override error() {
    return undefined;
  }
}
