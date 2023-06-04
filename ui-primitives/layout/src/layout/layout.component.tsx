/* eslint-disable react/jsx-no-leaked-render */

import type { FC }          from 'react'

import type { LayoutProps } from './layout.interfaces'

import React                from 'react'

import { sprinkles }        from '@css-primitives/sprinkles'

export const Layout: FC<LayoutProps> = ({
  children,
  display = 'flex',
  boxSizing = 'border-box',
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
