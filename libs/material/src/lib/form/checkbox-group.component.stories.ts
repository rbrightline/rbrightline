import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CheckboxGroupComponent> = {
  component: CheckboxGroupComponent,
  title:'Input/CheckboxGroupComponent',
};
export default meta;
type Story = StoryObj<CheckboxGroupComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/checkbox-group works!/gi)).toBeTruthy();
  },
};
