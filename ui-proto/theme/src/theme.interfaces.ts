import '@emotion/react'

export interface ProtoTheme {
  colors: {
    black: string
    white: string
  }
  fontWeights: {
    normal: number
    bold: number
  }
  fonts: {
    primary: string
  }
}

declare module '@emotion/react' {
  export interface Theme extends ProtoTheme {}
}
