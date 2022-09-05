import { createTheme } from '@mui/material/styles'

export const DrawerWidth = 250


const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      }
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          borderRadius: '0px 100px 0px 0px',
        }
      }
    }
  }
})

export default theme
