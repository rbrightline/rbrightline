import { Component, input } from '@angular/core';
import { InputCommonModule } from './input-common.module';
import { InputComponent } from './input.component';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'rl-input-text',
  standalone: true,
  imports: [InputCommonModule, MatSliderModule],
  template: `
    <section [formGroup]="formGroup()" class="pt-4 w-full">
      <mat-slider
        class="w-full"
        [max]="max"
        [min]="min"
        [step]="step"
        [discrete]="label()"
        [showTickMarks]="true"
      >
        <input
          #slider
          matSliderThumb
          [name]="name()"
          [(ngModel)]="value"
          [formControl]="formControl"
          [required]="required()"
        />
      </mat-slider>
    </section>

    {{ value() | json }}/{{ formControl.value | json }}
  `,
})
export class RangeComponent extends InputComponent {
  readonly max = input.required<number>();
  readonly min = input.required<number>();
  readonly step = input.required<number>();

  override error() {
    return undefined;
  }
}
