import React, { ReactNode } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import '@testing-library/jest-dom';
import { GlobalStyles } from '../styles/global';

type AllTheProvidersProps = {
  children: ReactNode;
};

function AllTheProviders({ children }: AllTheProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
