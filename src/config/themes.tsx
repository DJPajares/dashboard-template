import React, { createContext, useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';

type DarkModeProps = 'dark' | 'light';

// color design doken
const color = {
  black: '#000000',
  white: '#ffffff',
  gray: {
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  }
};

export const themeSettings = (mode: DarkModeProps) => {
  const isDark = mode === 'dark';

  return {
    palette: {
      mode: mode,
      primary: {
        main: isDark ? color.gray[100] : color.black
      },
      secondary: {
        main: isDark ? color.gray[900] : color.white
      },
      background: {
        default: isDark ? color.gray[900] : color.gray[100],
        paper: isDark ? color.gray[800] : color.gray[200]
      },
      text: {
        primary: isDark ? color.gray[100] : color.black,
        secondary: isDark ? color.gray[300] : color.gray[600]
      }
    }
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

export const useMode = () => {
  const [mode, setMode] = useState<DarkModeProps>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      }
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, colorMode };
};
