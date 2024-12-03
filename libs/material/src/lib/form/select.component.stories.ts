import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SelectComponent } from './select.component';
import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { InputCommonModule } from './input-common.module';

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: 'Input/SelectComponent',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(InputCommonModule), provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<SelectComponent>;

export const Primary: Story = {
  args: {
    name: 'toppings',
    label: 'Toppings',

    options: [
      'option 1',
      'option 2',
      'option 3',
      'option 4',
      'option 5',
      'option 6',
      'option 7',
      'option 8',
    ],
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(//gi)).toBeTruthy();
  },
};
