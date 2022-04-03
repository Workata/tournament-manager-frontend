import { createTheme } from '@mui/material/styles'

// * main App theme (color palette)

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',      // white
      turquoise: '#0097b8',
      turquoiseDark: '#00768f'
    },
    secondary: {
      main: '#000000'       // black
    }
  }
})

export default mainTheme