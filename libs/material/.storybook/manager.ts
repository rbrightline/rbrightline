// .storybook/manager.js
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.normal, // or themes.dark, depending on your preference
    brandTitle: 'Brightline Software',
    brandUrl: 'https://rbrightline.gtihub.io',
    brandImage: 'favicon.png', // Path to your custom icon
  },
});
