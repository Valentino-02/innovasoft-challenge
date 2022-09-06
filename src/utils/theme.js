import { createTheme } from '@mui/material/styles'

export const DrawerWidth = 250


const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      }
    }
  }
})

export default theme
