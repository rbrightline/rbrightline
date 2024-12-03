import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AutocompleteComponent } from './autocomplete.component';
import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { InputCommonModule } from './input-common.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const meta: Meta<AutocompleteComponent> = {
  component: AutocompleteComponent,
  title: 'Input/AutocompleteComponent',
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom([InputCommonModule, MatAutocompleteModule]),
        provideAnimations(),
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<AutocompleteComponent>;

export const Primary: Story = {
  args: {
    name: 'firstName',
    label: 'First name',
    options: ['first', 'second', 'third', 'forth'],
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/First Name/gi)).toBeTruthy();
  },
};
