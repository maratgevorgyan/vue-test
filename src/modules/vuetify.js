import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

const defaultTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'on-background': '#252526',
    border: '#E4E4E6',
    primary: '#937C37',
    'primary-light': '#BEAF87',
    grey: '#666667',
    white: '#FFFFFF',
    error: '#C62828'
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'default',
    themes: {
      default: defaultTheme
    }
  }
})

export default vuetify
