import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'rl-material',
  imports: [CommonModule, MatIconModule],
  template: `
    <mat-icon>home</mat-icon>
    <p>material works!</p>
  `,
})
export class MaterialComponent {}
