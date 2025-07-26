import type { Preview } from '@storybook/react-webpack5';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import GlobalStyle from '../src/styles/global';

const withThemeProvider = (Story) => (
  <ThemeProvider theme={theme} >
    <GlobalStyle />
    < Story />
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
