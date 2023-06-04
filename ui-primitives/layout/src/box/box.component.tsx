/* eslint-disable react/jsx-no-leaked-render */

import type { FC }       from 'react'

import type { BoxProps } from './box.interfaces'

import React             from 'react'

import { sprinkles }     from '@css-primitives/sprinkles'

export const Box: FC<BoxProps> = ({
  boxSizing = 'border-box',
  display = 'flex',
  children,
  className,
  style = {},
  ...props
}) => {
  const {
    className: sprinklesClassName,
    style: sprinklesStyle,
    otherProps,
  } = sprinkles({ display, boxSizing, ...props })

  return (
    <div
      className={className && `${sprinklesClassName} ${className}`}
      style={{ ...style, ...sprinklesStyle }}
      {...otherProps}
    >
      {children}
    </div>
  )
}
