import { Component, input, OnInit } from '@angular/core';
import { InputComponent } from './input.component';
import { InputCommonModule } from './input-common.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { startWith, map, Observable } from 'rxjs';

@Component({
  selector: 'rl-autocomplete',
  standalone: true,
  imports: [InputCommonModule, MatAutocompleteModule],
  template: `
    <mat-form-field [formGroup]="formGroup()" class="example-full-width">
      <!--  -->
      @if(prefixText()){ <span matTextPrefix> {{ prefixText() }} </span>}

      <!--  -->
      @if(suffixText()){ <span matTextSuffix> {{ suffixText() }} </span>}

      <!--  -->
      @if(prefixIcon()) {
      <mat-icon matIconPrefix> {{ prefixIcon() }} </mat-icon>}

      <!--  -->
      @if(suffixIcon()) {
      <mat-icon matIconSuffix> {{ suffixIcon() }} </mat-icon>}

      <!--  -->
      <mat-label>{{ label() }}</mat-label>

      <input
        type="text"
        matInput
        [placeholder]="label()"
        [formControl]="formControl"
        [matAutocomplete]="auto"
        [required]="required()"
        autocomplete="off"
      />
      <!--  -->
      @if(hint()){
      <mat-hint>{{ hint() }}</mat-hint>
      }

      <mat-error>{{ error() }}</mat-error>

      <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
        @for (option of filteredOptions | async ; track option) {
        <mat-option [value]="option">{{ option }}</mat-option>
        }
      </mat-autocomplete>
    </mat-form-field>
  `,
})
export class AutocompleteComponent extends InputComponent implements OnInit {
  options = input.required<string[]>();
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options().filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  override error() {
    if ((this.formControl.errors as any)?.required) {
      return `${this.name()} is required!`;
    }

    return undefined;
  }
}
