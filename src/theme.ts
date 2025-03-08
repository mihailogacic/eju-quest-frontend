import { createTheme } from '@mui/material/styles';
import '@fontsource/cabin/index.css';
import '@fontsource/inter/index.css';

declare module '@mui/material/styles' {
  interface TypeText {
    darkBlue: string;
    slateGray: string;
    charredBrown: string;
  }

  interface Palette {
    text: TypeText;
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#1C1C1C',
      darkBlue: '#040428',
      slateGray: '#504D4E',
      charredBrown: '#1F1C14',
    },
  },
  typography: {
    fontFamily: 'Cabin, Inter, Arial, sans-serif',
  },
});

export default theme;
