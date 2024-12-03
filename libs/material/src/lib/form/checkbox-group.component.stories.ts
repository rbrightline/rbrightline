import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { InputCommonModule } from './input-common.module';

const meta: Meta<CheckboxGroupComponent> = {
  component: CheckboxGroupComponent,
  title: 'Input/CheckboxGroupComponent',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(InputCommonModule), provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<CheckboxGroupComponent>;

export const Primary: Story = {
  args: {
    name: 'check',
    label: 'checkbox group',
    checkOptions: ['option1', 'option2', 'option3', 'option4', 'option5'],
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(//gi)).toBeTruthy();
  },
};
