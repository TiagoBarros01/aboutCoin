import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';
import { DefaultTheme } from 'styled-components/index';
import { ThemeProvider } from 'styled-components/native';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface Props {
  children: React.ReactNode;
}
interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: dark,
  toggleTheme: () => {
    console.log("ThemeProvider isn't rendered 😞");
  },
});

function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  const memoizedValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeContextProvider };
