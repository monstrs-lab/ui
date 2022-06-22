import type { CSSObject } from '@emotion/styled'

export const base = (): CSSObject => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const shape = (
  fontSize: number,
  fontWeight: string | number | any,
  fontFamily: string
): CSSObject => ({
  fontSize,
  fontWeight,
  fontFamily,
})

export const appearance = (color: string): CSSObject => ({
  color,
})
