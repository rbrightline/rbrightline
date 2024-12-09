import { Component, input } from '@angular/core';
import { InputCommonModule } from './input-common.module';
import { InputComponent } from './input.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@Component({
  selector: 'rl-button-select',
  standalone: true,
  imports: [InputCommonModule, MatButtonToggleModule],
  template: `
    <div [formGroup]="formGroupInstance()">
      <mat-button-toggle-group
        [name]="name()"
        [multiple]="multiple()"
        [formControl]="formControl"
        [(ngModel)]="value"
        class="w-full"
      >
        @for( option of options(); track option){
        <mat-button-toggle [value]="option">{{ option }}</mat-button-toggle>
        }
      </mat-button-toggle-group>
    </div>
  `,
})
export class ButtonSelectComponent extends InputComponent {
  options = input.required<string[]>();
  multiple = input<boolean>(false);

  override error() {
    const errors = this.formControl.errors as any;
    const name = this.name();

    return undefined;
  }
}
