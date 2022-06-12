import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#3ABD98',
    },
    secondary: {
      main: '#1D9270'
    },
    white: {
      main: '#FFFFFF'
    }
  },
  components: {
      MuiFormLabel: {
          styleOverrides: {
              asterisk: { color: "red" },
          },
      },
  },
}))

export default theme
