export const defaultTheme = {
  palette: {
    neutral: {
      100: '#fafafa',
      300: '#eaeaea',
      500: '#cacaca',
      700: '#8c8c8c',
      900: '#4c4c4c',
    },
    primary: {
      100: '#BBDEFB',
      300: '#64B5F6',
      500: '#2196F3',
      700: '#1976D2',
      900: '#0D47A1',
    },
  },
  color: {
    white: '#fff',
    black: '#000',
    red: '#ff0000',
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: {
      base: '16px',
      small: '14px',
      large: '18px',
    },
  },
  spacing: {
    base: '16px',
    small: '12px',
    large: '24px',
    extraSmall: '4px',
  },
  border: {
    radius: {
      base: '4px',
      small: '2px',
      large: '8px',
    }
  }
} as const