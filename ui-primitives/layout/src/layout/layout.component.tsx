import type { LayoutProps } from './layout.interfaces'
import type { FC }          from 'react'

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
      className={className ? `${sprinklesClassName} ${className}` : sprinklesClassName}
      style={{ ...style, ...sprinklesStyle }}
      {...otherProps}
    >
      {children}
    </div>
  )
}
