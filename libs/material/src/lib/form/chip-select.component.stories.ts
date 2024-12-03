import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ChipSelectComponent } from './chip-select.component';
import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { InputCommonModule } from './input-common.module';

const meta: Meta<ChipSelectComponent> = {
  component: ChipSelectComponent,
  title: 'Input/ChipSelectComponent',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(InputCommonModule), provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<ChipSelectComponent>;

export const Primary: Story = {
  args: {
    name: 'name',
    label: 'Name',
    options: [
      'option 1',
      'option 2',
      'option 3',
      'option 4',
      'option 5',
      'option 6',
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
