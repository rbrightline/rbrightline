import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputTextComponent } from './input-text.component';
import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { importProvidersFrom } from '@angular/core';
import { InputCommonModule } from './input-common.module';

const meta: Meta<InputTextComponent> = {
  component: InputTextComponent,
  title: 'Input/InputTextComponent',

  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(InputCommonModule), provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputTextComponent>;

export const Primary: Story = {
  args: {
    name: 'firstName',
    label: 'First Name',
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/input-text works!/gi)).toBeTruthy();
  },
};
