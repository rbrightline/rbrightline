import { Component } from '@angular/core';
import { InputCommonModule } from '../form/input-common.module';
import { FormControl, FormGroup } from '@angular/forms';
import { InputTextComponent } from '../form/input-text.component';

@Component({
  selector: 'rl-product-form',
  imports: [InputCommonModule, InputTextComponent],
  standalone: true,
  template: `
    <form [formGroup]="formGroup" formGroupName="productDetails">
      <rl-input-text
        name="name"
        [formGroupInstance]="formGroup"
      ></rl-input-text>
      <rl-input-text
        name="description"
        [formGroupInstance]="formGroup"
      ></rl-input-text>
    </form>

    {{ formGroup.value | json }}
  `,
})
export class ProductFormComponent {
  formGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });
}
