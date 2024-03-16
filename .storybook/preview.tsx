import { ThemeProvider } from 'styled-components'
import type { Preview } from '@storybook/react';
import {theme} from '../src/style/theme'
import {GlobalStyle} from '../src/style/globalstyles'
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators:[
    (Story, context) => {
        return (
        <ThemeProvider theme={theme}>
        <Story {...context} />
        <GlobalStyle />
        </ThemeProvider>
        );
    }
  ]
};



export default preview;
