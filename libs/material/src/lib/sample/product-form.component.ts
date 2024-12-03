import { Component } from '@angular/core';
import { InputCommonModule } from '../form/input-common.module';
import { InputTextComponent } from '../form/input-text.component';
import { InputNumberComponent } from '../form/input-number.component';
import { ChipSelectComponent } from '../form/chip-select.component';
import { SelectComponent } from '../form/select.component';

@Component({
  selector: 'rl-product-form',
  imports: [
    InputCommonModule,
    InputTextComponent,
    InputNumberComponent,
    SelectComponent,
    ChipSelectComponent,
  ],
  standalone: true,
  template: '',
})
export class ProductFormComponent {}
