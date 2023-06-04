/* eslint-disable react/jsx-no-leaked-render */

import type { FC }        from 'react'

import type { TextProps } from './text.interfaces'

import React              from 'react'

import { sprinkles }      from '@css-primitives/sprinkles'

export const Text: FC<TextProps> = ({
  children,
  display = 'inline-flex',
  className,
  style = {},
  ...props
}) => {
  const {
    className: sprinklesClassName,
    style: sprinklesStyle,
    otherProps,
  } = sprinkles({ display, ...props })

  return (
    <span
      className={className && `${sprinklesClassName} ${className}`}
      style={{ ...style, ...sprinklesStyle }}
      {...otherProps}
    >
      {children}
    </span>
  )
}
