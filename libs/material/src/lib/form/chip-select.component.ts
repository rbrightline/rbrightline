import { Component, computed, model } from '@angular/core';
import { InputCommonModule } from './input-common.module';
import { InputComponent } from './input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'rl-chip-select',
  standalone: true,
  imports: [InputCommonModule, MatChipsModule, MatAutocompleteModule],
  template: `
    <!--  -->
    <mat-form-field [formGroup]="formGroupInstance()" class="w-full">
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

      <mat-label>
        {{ label() }}
        <span>
          <!-- Add status  -->
        </span>
      </mat-label>

      <mat-chip-grid #chipGrid [formControl]="formControl" [(ngModel)]="value">
        @for (option of selectedOptions(); track $index) {
        <mat-chip-row (removed)="remove(option)">
          {{ option }}
          <button matChipRemove [attr.aria-label]="'remove ' + option">
            <mat-icon>cancel</mat-icon>
          </button>
        </mat-chip-row>
        }
      </mat-chip-grid>
      <input
        [name]="name()"
        #optionInput
        [(ngModel)]="currentOption"
        [matChipInputFor]="chipGrid"
        [matAutocomplete]="auto"
        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
        (matChipInputTokenEnd)="add()"
        [formControl]="formControl"
      />
      <mat-autocomplete #auto="matAutocomplete" [autoActiveFirstOption]="true">
        @for (option of filteredOptions(); track option) {
        <mat-option [value]="option">{{ option }}</mat-option>
        }
      </mat-autocomplete>

      @if(hint()){ <mat-hint>{{ hint() }}</mat-hint>
      }
      <mat-error>{{ error() }}</mat-error>
    </mat-form-field>
  `,
})
export class ChipSelectComponent extends InputComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  options = model.required<string[]>();

  selectedOptions = model<string[]>([]);

  currentOption = model('');

  filteredOptions = computed(() => {
    const currentOption = this.currentOption().toLowerCase();
    return currentOption
      ? this.options().filter((option) =>
          option.toLowerCase().includes(currentOption)
        )
      : this.options().slice();
  });

  add(): void {
    const value = this.filteredOptions()[0];

    // Add our fruit
    if (this.isOption(value)) {
      this.selectedOptions.update((options) => {
        if (options.includes(value)) return options;

        return [...options, value];
      });
    }
    this.currentOption.set('');
  }

  isOption(option: string) {
    return this.options().includes(option);
  }

  remove(option: string): void {
    this.selectedOptions.update((options) => {
      const index = options.indexOf(option);
      if (index < 0) {
        return options;
      }
      options.splice(index, 1);

      return [...options];
    });
  }

  override error() {
    return undefined;
  }
}
