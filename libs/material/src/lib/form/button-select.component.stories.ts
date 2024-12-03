import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ButtonSelectComponent } from './button-select.component';
import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { InputCommonModule } from './input-common.module';

const meta: Meta<ButtonSelectComponent> = {
  component: ButtonSelectComponent,
  title: 'Input/ButtonSelectComponent',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(InputCommonModule), provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<ButtonSelectComponent>;

export const Primary: Story = {
  args: {
    name: 'option',
    label: 'Button Select',
    options: ['First', 'Second', 'Third'],
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(//gi)).toBeTruthy();
  },
};
