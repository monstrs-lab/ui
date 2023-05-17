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
}: BoxProps) => (
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
  width: [300, 200, 100],
  height: [300, 200, 100],
  backgroundColor: 'blue',
  borderRadius: 10,
  boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.2)',
}

Box.argTypes = {}
