import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonSelectComponent } from './button-select.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonSelectComponent> = {
  component: ButtonSelectComponent,
  title:'Input/ButtonSelectComponent',
};
export default meta;
type Story = StoryObj<ButtonSelectComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button-select works!/gi)).toBeTruthy();
  },
};
