import type { BoxProps } from './box.interfaces'
import type { FC }       from 'react'

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
      className={className ? `${sprinklesClassName} ${className}` : sprinklesClassName}
      style={{ ...style, ...sprinklesStyle }}
      {...otherProps}
    >
      {children}
    </div>
  )
}
