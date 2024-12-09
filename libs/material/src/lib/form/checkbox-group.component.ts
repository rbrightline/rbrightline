import { Component, input } from '@angular/core';
import { InputComponent } from './input.component';
import { InputCommonModule } from './input-common.module';
import { CheckboxComponent } from './checkbox.component';

@Component({
  selector: 'rl-checkbox-group',
  standalone: true,
  imports: [InputCommonModule, CheckboxComponent],
  template: `
    <section
      [formGroup]="formGroupInstance()"
      [id]="name()"
      class="flex flex-col gap-2 w-full"
    >
      <label [for]="name()">{{ label() }}</label>
      @for(option of checkOptions(); track option) {
      <rl-checkbox
        [name]="option"
        [label]="option"
        (valueChange)="update($event, option)"
      >
      </rl-checkbox>
      }
    </section>
  `,
})
export class CheckboxGroupComponent extends InputComponent<
  Record<string, boolean | null>
> {
  checkOptions = input.required<string[]>();

  override error(): string | undefined | null {
    return undefined;
  }

  update(checked: boolean | null, name: string) {
    this.formControl.setValue(this.value());
    this.value.update((v) => {
      return { ...v, [name]: checked };
    });
  }
}
