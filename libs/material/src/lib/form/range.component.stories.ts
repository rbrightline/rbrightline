import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { RangeComponent } from './range.component';
import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { InputCommonModule } from './input-common.module';

const meta: Meta<RangeComponent> = {
  component: RangeComponent,
  title: 'Input/RangeComponent',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(InputCommonModule), provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<RangeComponent>;

export const Primary: Story = {
  args: {
    name: 'number',
    label: 'Some number',
    min: 0,
    max: 100,
    step: 5,
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Some number/gi)).toBeTruthy();
  },
};
