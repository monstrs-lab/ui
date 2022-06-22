import { themes }        from '@storybook/theming'

import React             from 'react'

import { ThemeProvider } from '@ui-parts/theme'

const withThemeProvider = (Story, context) => (
  <ThemeProvider>
    <Story {...context} />
  </ThemeProvider>
)

export const decorators = [withThemeProvider]

export const parameters = {
  controls: { expanded: true },
  layout: 'centered',
  docs: {
    theme: themes.light,
  },
}
