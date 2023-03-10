import type { FC }                    from 'react'

import styled                         from '@emotion/styled'

import { switchProp }                 from 'styled-tools'
import { ifProp }                     from 'styled-tools'
import { prop }                       from 'styled-tools'

import { Button as PrimitivesButton } from '@ui-primitives/button'

import { ButtonProps }                from './button.interfaces'

const sizeMap = {
  small: 24,
  normal: 32,
  large: 48,
}

export const Button: FC<ButtonProps> = styled(PrimitivesButton)(
  {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    wordBreak: 'break-word',
    cursor: 'pointer',
    outline: 'none',
    padding: 0,
    border: '1px solid transparent',
    height: 40,
    fontSize: 12,
    fontWeight: 600,
    fontFamily: 'Noto Sans',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 6,
    backgroundColor: 'black',
    borderColor: 'black',
    color: 'white',
    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
    '&:focus': { borderColor: '#1EA7FD' },
  },
  switchProp(prop('size', 'normal'), () => ({
    small: {
      height: 24,
      fontSize: 11,
      fontWeight: 600,
      borderRadius: 6,
    },
    normal: {
      height: 32,
      fontSize: 12,
      fontWeight: 600,
      borderRadius: 6,
    },
    large: {
      height: 48,
      fontSize: 14,
      fontWeight: 600,
      borderRadius: 6,
    },
  })),
  ifProp('inverted', {
    backgroundColor: 'transparent',
    borderWidth: 1,
    color: 'black',
  }),
  ifProp('fill', { width: '100%' }),
  ({ rounding }) => ({
    borderRadius: rounding,
  }),
  switchProp(prop('shape', 'rectangle'), ({ size }: any) => ({
    rectangle: {
      height: sizeMap[size],
    },
    square: {
      padding: 0,
      width: sizeMap[size],
      height: sizeMap[size],
      borderRadius: 0,
    },
    circle: {
      padding: 0,
      width: sizeMap[size],
      height: sizeMap[size],
      borderRadius: '50%',
    },
  }))
)
