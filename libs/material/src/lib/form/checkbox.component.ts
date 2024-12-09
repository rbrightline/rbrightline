import { Component } from '@angular/core';
import { InputCommonModule } from './input-common.module';
import { InputComponent } from './input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'rl-checkbox',
  standalone: true,
  imports: [InputCommonModule, MatCheckboxModule],
  template: `
    <div [formGroup]="formGroupInstance()">
      <mat-checkbox
        class="example-margin"
        [(ngModel)]="value"
        [formControl]="formControl"
        class="w-full"
      >
        {{ label() }}
      </mat-checkbox>
    </div>
  `,
})
export class CheckboxComponent extends InputComponent<boolean> {
  override error() {
    return undefined;
  }
}
