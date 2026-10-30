import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { themeQuartz } from 'ag-grid-community';

export const customPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',

          900: '#171717',
          950: '#0a0a0a',
        },
        formField: {
          background: '{primary.0}',
          borderColor: '{primary.200}',
          hoverBorderColor: '{primary.300}',
          focusBorderColor: '{primary.950}',
          color: '{primary.950}',
          placeholderColor: '{primary.500}',
          borderRadius: '0.375rem',
        },
      },
      dark: {
        primary: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#909090',
          600: '#606060',
          700: '#4f4f4f',
          800: '#404040',
          900: '#262626',
          950: '#171717',
        },
        formField: {
          background: '{primary.800}',
          borderColor: '{primary.700}',
          hoverBorderColor: '{primary.600}',
          focusBorderColor: '{primary.0}',
          color: '{primary.50}',
          placeholderColor: '{primary.500}',
          borderRadius: '0.375rem',
        },
      },
    },
  },
});

export const scoutGridTheme = themeQuartz.withParams({
  backgroundColor: 'var(--p-content-background)',
  foregroundColor: 'var(--p-text-color)',
  textColor: 'var(--p-text-color)',

  fontFamily: 'inherit',
  browserColorScheme: 'inherit',
});
