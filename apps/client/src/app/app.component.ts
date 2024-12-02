import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SampleService } from './sample.service';
import { InputCommonModule } from '@rline/material';

@Component({
  standalone: true,
  imports: [RouterModule, MatIconModule, InputCommonModule],
  selector: 'rl-root',
  template: `
    <form>
      <mat-form-field>
        <mat-label>Input Label </mat-label>
        <input type="text" matInput />
      </mat-form-field>
      <router-outlet></router-outlet>
    </form>
  `,
  providers: [SampleService],
})
export class AppComponent implements OnInit {
  constructor(protected readonly sampleService: SampleService) {}

  async ngOnInit() {
    this.sampleService.entities$.subscribe(console.log);
    this.sampleService.getWithQuery({});
    this.sampleService.addOneToCache({ id: 1, name: 'sample' });
  }
}
