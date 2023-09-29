import {CardProps, ThemeOptions, createTheme} from '@mui/material';

export const appThemeConfig = {
  palette: {
    primary: {main: '#000000', contrastText: '#FFFFFF'},
    primaryContainer: {main: 'rgb(240, 240, 240)', contrastText: 'rgb(57, 62, 70)'},
    secondary: {main: 'rgb(222, 222, 222)', contrastText: 'rgb(39, 40, 41)'},
    warning: {main: '#F0A73A', contrastText: '#EFF6FF'},
    background: {default: '#FFFFFF', paper: 'rgb(240, 240, 240)'},
    text: {disabled: '#A0A0A0', primary: '#1B3149', secondary: '#1B3149CC'},
    error: {main: '#DF4747'},
    success: {main: '#46C779'},
    divider: '#9EABBA',
    border: 'rgb(34, 40, 49)',
  },

  typography: {
    fontFamily: ['Public-sans', 'sans-serif'].join(','),
    h1: {fontSize: 40, fontWeight: 700},
    h2: {fontSize: 28, fontWeight: 700},
    h3: {fontSize: 26, fontWeight: 600},
    h4: {fontSize: 24, fontWeight: 600},
    h5: {fontSize: 22, fontWeight: 600},
    h6: {fontSize: 20, fontWeight: 600},
    subtitle1: {fontSize: 18, fontWeight: 400},
    subtitle2: {fontSize: 16, fontWeight: 400},
    body1: {fontSize: 14, fontWeight: 400},
    body2: {fontSize: 12, fontWeight: 400},
    caption: {fontSize: 10, fontWeight: 400},
    button: {fontSize: 20, fontWeight: 700},
    overline: {fontWeight: 700},
  },
  breakpoints: {values: {xs: 0, sm: 640, md: 1024, lg: 1200, xl: 1500}},
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: '9.5px',
          border: '1px solid #000000',
          borderRadius: '8px',
          fontWeight: '600',
          fontSize: '18px',
          color: '#000000',

          '&.Mui-selected': {
            color: '#FFFFFF',
            backgroundColor: '#000000',

            '&:hover': {
              backgroundColor: '#000000',
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          '::before': {
            width: '0%',
          },

          '.MuiDivider-wrapper': {
            paddingLeft: '0',
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: ({ownerState}: {ownerState: CardProps}) => ({
          border: '1px solid rgb(34, 40, 49)',
          borderRadius: '11px',
          color: '#1B3149',
          cursor: 'pointer',
          boxShadow: 'none',

          ...(ownerState.raised === true && {
            boxShadow: '0px 20px 19px rgb(248, 248, 248)',
          }),
        }),
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          color: '#1B3149CC',
          fontWeight: 400,
          fontSize: '16px',

          '&.Mui-selected': {
            color: '#000000',
            fontWeight: 700,
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {size: 'medium' as const},
    },
    MuiInput: {
      defaultProps: {size: 'medium' as const},
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: '45px',
          borderRadius: '8px',
          minWidth: '200px',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'large' as const,
      },

      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '16px',
          borderRadius: '8px',
          boxShadow: 'none',
        },

        sizeLarge: {
          fontSize: '16px',
          padding: '8px 20px',
        },

        sizeMedium: {
          fontSize: '14px',
          fontWeight: 600,
        },

        sizeSmall: {
          fontSize: '12px',
          fontWeight: 600,
        },

        contained: {
          background: '#000000',

          ':disabled': {
            backgroundColor: '#000000',
            opacity: 0.4,
            color: '#FFFFFF',
          },

          ':hover': {
            backgroundColor: '#000000',
            opacity: 0.9,
            color: '#FFFFFF',
          },
        },

        outlined: {
          border: '2px solid #000000',

          ':hover': {
            border: '2px solid #000000',
          },
        },
      },
    },
  },
};

export type ThemeType = typeof appThemeConfig & ThemeOptions;
export const AppTheme = createTheme(appThemeConfig);
