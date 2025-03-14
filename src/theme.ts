import { createTheme } from '@mui/material/styles';
import '@fontsource/cabin/index.css';
import '@fontsource/inter/index.css';

declare module '@mui/material/styles' {
  interface TypeText {
    darkBlue: string;
    slateGray: string;
    charredBrown: string;
    dimGray: string;
    midGray: string;
    softGray: string;
    darkGray: string;
    steelGray: string;
  }

  interface Palette {
    text: TypeText;
    border: TypeText;
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
    border?: Partial<TypeText>;
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
      dimGray: '#595959',
      midGray: '#8D8D8D',
      softGray: '#F5F5F5',
      darkGray: '#616161',
      steelGray: '#757575',
    },
    border: {
      midGray: '#8D8D8D',
    },
  },
  typography: {
    fontFamily: 'Cabin, Inter, Arial, sans-serif',
  },
});

export default theme;
