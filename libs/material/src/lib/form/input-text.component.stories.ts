import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputTextComponent } from './input-text.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
const meta: Meta<InputTextComponent> = {
  component: InputTextComponent,
  title: 'Input/InputTextComponent',

  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: 'outline',
          },
        },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputTextComponent>;

export const Primary: Story = {
  args: {
    name: 'firstName',
    label: 'First Name',
    prefixIcon: 'info',
    suffixIcon: 'settings',
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/input-text works!/gi)).toBeTruthy();
  },
};
