import type { Token } from '@ui-parts/types'

export const base = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  boxSizing: 'border-box',
})

export const size = (s: number) => ({
  width: s,
  height: s,
})

export const shape = (
  borderWidth: number = 1,
  borderRadius: number | string = '100%',
  borderStyle: string = 'solid'
) => ({
  borderRadius,
  borderStyle,
  borderWidth,
})

export const appearance = (
  backgroundColor: string | Token<any, string, 'colors', ''>,
  borderColor: string | Token<any, string, 'colors', ''>
) => ({
  backgroundColor,
  borderColor,
})
