import type { CSSObject } from '@emotion/styled'

export const base = (): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  boxSizing: 'border-box',
})

export const size = (s: number): CSSObject => ({
  width: s,
  height: s,
})

export const shape = (
  borderWidth: number = 1,
  borderRadius: number | string = '100%',
  borderStyle: string = 'solid'
): CSSObject => ({
  borderRadius,
  borderStyle,
  borderWidth,
})

export const appearance = (backgroundColor: string, borderColor: string): CSSObject => ({
  backgroundColor,
  borderColor,
})
