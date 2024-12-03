import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { RadioComponent } from './radio.component';
import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { InputCommonModule } from './input-common.module';

const meta: Meta<RadioComponent> = {
  component: RadioComponent,
  title: 'Input/RadioComponent',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(InputCommonModule), provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<RadioComponent>;

export const Primary: Story = {
  args: {
    name: 'options',
    label: 'options',
    options: ['Option 1', 'Option 2'],
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(//gi)).toBeTruthy();
  },
};
