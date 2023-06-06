import type { JSX }      from 'react'

import React             from 'react'

import { ThemeProvider } from '@ui-proto/theme'

const withThemeProvider = (Story, context): JSX.Element => (
  <ThemeProvider>
    <Story {...context} />
  </ThemeProvider>
)

export const decorators = [withThemeProvider]

export const parameters = {
  controls: { expanded: true },
  layout: 'centered',
}
