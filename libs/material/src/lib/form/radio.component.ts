import { Component, input } from '@angular/core';
import { InputCommonModule } from './input-common.module';
import { InputComponent } from './input.component';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'rl-input-text',
  standalone: true,
  imports: [InputCommonModule, MatRadioModule],
  template: `
    <mat-radio-group
      [(ngModel)]="value"
      [formControl]="formControl"
      [required]="required()"
    >
      @for (option of options(); track $index) {
      <mat-radio-button [value]="option">{{ option }}</mat-radio-button>
      }
    </mat-radio-group>
  `,
})
export class RadioComponent extends InputComponent {
  options = input.required<string[]>();

  override error() {
    return undefined;
  }
}
