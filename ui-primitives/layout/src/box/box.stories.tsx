import type { JSX }            from 'react'

import type { BoxProps }       from './box.interfaces'

import React                   from 'react'

import { Box as BoxComponent } from './box.component'

export default {
  title: 'Components/Layout',
}

export const Box = ({
  display,
  width,
  height,
  backgroundColor,
  borderRadius,
  boxShadow,
}: BoxProps): JSX.Element => (
  <BoxComponent
    display={display}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    boxShadow={boxShadow}
  />
)

Box.args = {
  display: 'flex',
  width: { mobile: '300px', tablet: '200px', desktop: '100px' },
  height: { mobile: '300px', tablet: '200px', desktop: '100px' },
  backgroundColor: 'blue',
  borderRadius: '10px',
  boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.2)',
}

Box.argTypes = {}
