import { Component } from '@angular/core';
import { InputCommonModule } from './input-common.module';

@Component({
  selector: 'rl-input-text',
  standalone: true,
  imports: [InputCommonModule],
  template: `
    <mat-form-field>
      <mat-label>Label</mat-label>
      <input type="text" matInput />
      <span matPrefix> Prefix</span>
      <span matSuffix> Suffix</span>
      <mat-icon matIconPrefix>home</mat-icon>
      <mat-icon matIconSuffix>home</mat-icon>

      <mat-hint>Hint</mat-hint>
    </mat-form-field>
  `,
  styles: ``,
})
export class InputTextComponent {}
