import type { Meta, StoryObj } from '@storybook/angular';
import { RangeComponent } from './range.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RangeComponent> = {
  component: RangeComponent,
  title:'Input/RangeComponent',
};
export default meta;
type Story = StoryObj<RangeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/range works!/gi)).toBeTruthy();
  },
};
