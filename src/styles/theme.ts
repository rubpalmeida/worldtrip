import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#FFBA08"
    },
    gray: {
      "50": "#F5F8FA",
      "200": "#DADADA",
      "600": "#47585B",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.50'
      }
    }
  }
})
