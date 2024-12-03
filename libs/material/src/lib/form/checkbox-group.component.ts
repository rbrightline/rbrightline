import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { InputCommonModule } from './input-common.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'rl-checkbox-group',
  standalone: true,
  imports: [InputCommonModule, MatCheckboxModule],
  template: `
    <section [id]="name()" class="flex flex-col gap-2 w-full">
      <label [for]="name()">{{ label() }}</label>
      @for(option of checkOptions(); track option) {
      <mat-checkbox
        class="example-margin"
        [(ngModel)]="__value[option]"
        (change)="update()"
      >
        {{ option }}
      </mat-checkbox>
      }
    </section>
    {{ __value | json }} {{ formControl.value | json }}
  `,
})
export class CheckboxGroupComponent extends InputComponent<
  Record<string, boolean>
> {
  __value: Record<string, boolean> = {};

  checkOptions = input.required<string[]>();

  override error(): string | undefined | null {
    return undefined;
  }

  update() {
    this.formControl.setValue(this.__value);
    this.value.update((v) => {
      return { ...v, ...this.__value };
    });
  }
}
