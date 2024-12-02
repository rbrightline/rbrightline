import type { Meta, StoryObj } from '@storybook/angular';
import { InputNumberComponent } from './input-number.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputNumberComponent> = {
  component: InputNumberComponent,
  title: 'Input/InputNumberComponent',
};
export default meta;
type Story = StoryObj<InputNumberComponent>;

export const Primary: Story = {
  args: {
    name: 'age',
    label: 'Age',
    min: 18,
    max: 120,
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/input-number works!/gi)).toBeTruthy();
  },
};
