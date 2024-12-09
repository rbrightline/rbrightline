import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ProductFormComponent } from './product-form.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InputCommonModule } from '../form/input-common.module';

const meta: Meta<ProductFormComponent> = {
  component: ProductFormComponent,
  title: 'Input/ProductFormComponent',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(InputCommonModule), provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<ProductFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/product-form works!/gi)).toBeTruthy();
  },
};
