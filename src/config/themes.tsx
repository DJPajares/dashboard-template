import React, { createContext, useMemo, useState } from 'react';
import { createTheme, Theme } from '@mui/material/styles';

type DarkModeProps = 'dark' | 'light';

// color design doken
const colors = {
  white: '#fcfcfc',
  grey: {
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414'
  },
  orange: {
    100: '#fff3e0',
    200: '#ffe0b2',
    300: '#ffcc80',
    400: '#ffb74d',
    500: '#ffa726',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100'
  },
  navyBlue: {
    100: '#cbd4e6',
    200: '#a9b8d5',
    300: '#879bc5',
    400: '#647fb4',
    500: '#4b659b',
    600: '#3a4f78',
    700: '#2a3856',
    800: '#192234',
    900: '#080b11'
  },
  yellow: {
    100: '#fffde7',
    200: '#fff9c4',
    300: '#fff59d',
    400: '#fff176',
    500: '#ffee58',
    600: '#fdd835',
    700: '#fbc02d',
    800: '#f9a825',
    900: '#f57f17'
  },
  purple: {
    100: '#f3e5f5',
    200: '#e1bee7',
    300: '#ce93d8',
    400: '#ba68c8',
    500: '#ab47bc',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c'
  },
  pink: {
    100: '#fce4ec',
    200: '#f8bbd0',
    300: '#f48fb1',
    400: '#f06292',
    500: '#ec407a',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f'
  },
  teal: {
    100: '#e0f2f1',
    200: '#b2dfdb',
    300: '#80cbc4',
    400: '#4db6ac',
    500: '#26a69a',
    600: '#009688',
    700: '#00897b',
    800: '#00796b',
    900: '#00695c'
  },
  cyan: {
    100: '#e0f7fa',
    200: '#b2ebf2',
    300: '#80deea',
    400: '#4dd0e1',
    500: '#26c6da',
    600: '#00bcd4',
    700: '#00acc1',
    800: '#0097a7',
    900: '#00838f'
  },
  lime: {
    100: '#f9fbe7',
    200: '#f0f4c3',
    300: '#e6ee9c',
    400: '#dce775',
    500: '#d4e157',
    600: '#cddc39',
    700: '#c0ca33',
    800: '#afb42b',
    900: '#9e9d24'
  },
  amber: {
    100: '#fff8e1',
    200: '#ffecb3',
    300: '#ffe082',
    400: '#ffd54f',
    500: '#ffca28',
    600: '#ffc107',
    700: '#ffb300',
    800: '#ffa000',
    900: '#ff8f00'
  },
  darkBlue: {
    100: '#e8eaf6',
    200: '#c5cae9',
    300: '#9fa8da',
    400: '#7986cb',
    500: '#5c6bc0',
    600: '#3f51b5',
    700: '#3949ab',
    800: '#303f9f',
    900: '#283593'
  },
  lightBlue: {
    100: '#e1f5fe',
    200: '#b3e5fc',
    300: '#81d4fa',
    400: '#4fc3f7',
    500: '#29b6f6',
    600: '#03a9f4',
    700: '#039be5',
    800: '#0288d1',
    900: '#0277bd'
  }
};

export const tokens = (mode: DarkModeProps) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414'
        },
        primary: {
          100: '#d0d1d5',
          200: '#a1a4ab',
          300: '#727681',
          400: '#1F2A40',
          500: '#141b2d',
          600: '#101624',
          700: '#0c101b',
          800: '#080b12',
          900: '#040509'
        },
        greenAccent: {
          100: '#dbf5ee',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922'
        },
        redAccent: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f'
        },
        blueAccent: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632'
        },
        orange: {
          100: '#fff3e0',
          200: '#ffe0b2',
          300: '#ffcc80',
          400: '#ffb74d',
          500: '#ffa726',
          600: '#fb8c00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100'
        },
        yellow: {
          100: '#fffde7',
          200: '#fff9c4',
          300: '#fff59d',
          400: '#fff176',
          500: '#ffee58',
          600: '#fdd835',
          700: '#fbc02d',
          800: '#f9a825',
          900: '#f57f17'
        },
        purple: {
          100: '#f3e5f5',
          200: '#e1bee7',
          300: '#ce93d8',
          400: '#ba68c8',
          500: '#ab47bc',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c'
        },
        pink: {
          100: '#fce4ec',
          200: '#f8bbd0',
          300: '#f48fb1',
          400: '#f06292',
          500: '#ec407a',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f'
        },
        teal: {
          100: '#e0f2f1',
          200: '#b2dfdb',
          300: '#80cbc4',
          400: '#4db6ac',
          500: '#26a69a',
          600: '#009688',
          700: '#00897b',
          800: '#00796b',
          900: '#00695c'
        },
        cyan: {
          100: '#e0f7fa',
          200: '#b2ebf2',
          300: '#80deea',
          400: '#4dd0e1',
          500: '#26c6da',
          600: '#00bcd4',
          700: '#00acc1',
          800: '#0097a7',
          900: '#00838f'
        },
        lime: {
          100: '#f9fbe7',
          200: '#f0f4c3',
          300: '#e6ee9c',
          400: '#dce775',
          500: '#d4e157',
          600: '#cddc39',
          700: '#c0ca33',
          800: '#afb42b',
          900: '#9e9d24'
        },
        amber: {
          100: '#fff8e1',
          200: '#ffecb3',
          300: '#ffe082',
          400: '#ffd54f',
          500: '#ffca28',
          600: '#ffc107',
          700: '#ffb300',
          800: '#ffa000',
          900: '#ff8f00'
        },
        darkBlue: {
          100: '#e8eaf6',
          200: '#c5cae9',
          300: '#9fa8da',
          400: '#7986cb',
          500: '#5c6bc0',
          600: '#3f51b5',
          700: '#3949ab',
          800: '#303f9f',
          900: '#283593'
        },
        lightBlue: {
          100: '#e1f5fe',
          200: '#b3e5fc',
          300: '#81d4fa',
          400: '#4fc3f7',
          500: '#29b6f6',
          600: '#03a9f4',
          700: '#039be5',
          800: '#0288d1',
          900: '#0277bd'
        },
        navyBlue: {
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3f51b5',
          600: '#364da6', // darker shade
          700: '#2c448e', // darker shade
          800: '#223b75', // darker shade
          900: '#1a2f5e' // darker shade
        }
      }
    : {
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0'
        },
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#f2f0f0', // manually changed
          500: '#141b2d',
          600: '#1F2A40',
          700: '#727681',
          800: '#a1a4ab',
          900: '#d0d1d5'
        },
        greenAccent: {
          100: '#0f2922',
          200: '#1e5245',
          300: '#2e7c67',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee'
        },
        redAccent: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb'
        },
        blueAccent: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe'
        }
      })
});

export const themeSettings = (mode: DarkModeProps) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.teal[500]
            },
            secondary: {
              main: colors.orange[900]
            },
            background: {
              default: colors.navyBlue[800],
              paper: colors.navyBlue[700]
            },
            text: {
              primary: colors.white,
              secondary: colors.grey[700]
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.orange[900]
            },
            secondary: {
              main: colors.teal[500]
            },
            background: {
              default: colors.white,
              paper: colors.grey[100]
            },
            text: {
              primary: colors.grey[700],
              secondary: colors.grey[700]
            }
          })
    },
    typography: {
      fontFamily: 'Source Sans Pro, sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: 40,
        lineHeight: 1.2
      },
      h2: {
        fontWeight: 700,
        fontSize: 32,
        lineHeight: 1.2
      },
      h3: {
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 1.2
        // letterSpacing: '0em'
      },
      h4: {
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 1.2
      },
      h5: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1.2
      },
      h6: {
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 1.2
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
