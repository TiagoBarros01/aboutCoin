import React from 'react';

import { QuotationContextProvider } from './QuotationContext';
import { ThemeContextProvider } from './ThemeContext';

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  return (
    <ThemeContextProvider>
      <QuotationContextProvider>
        {children}
      </QuotationContextProvider>
    </ThemeContextProvider>
  );
}
