import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [RouterModule, MatIconModule],
  selector: 'rl-root',
  template: `
    <mat-icon class="text-emerald-400">home</mat-icon>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'client';
}
