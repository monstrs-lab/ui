import type { Token } from '@ui-parts/types'

export const base = () => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const shape = (
  fontSize: number,
  fontWeight: string | number | any,
  fontFamily: string | Token<any, string, 'fonts', ''>
) => ({
  fontSize,
  fontWeight,
  fontFamily,
})

export const appearance = (color: string | Token<any, string, 'colors', ''>) => ({
  color,
})
