import type { Meta, StoryObj } from '@storybook/angular';
import { ChipSelectComponent } from './chip-select.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ChipSelectComponent> = {
  component: ChipSelectComponent,
  title:'Input/ChipSelectComponent',
};
export default meta;
type Story = StoryObj<ChipSelectComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/chip-select works!/gi)).toBeTruthy();
  },
};
