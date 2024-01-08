import type { SelectIconProps } from '@radix-ui/react-select'
import type { ReactElement }    from 'react'

import { Icon }                 from '@radix-ui/react-select'
import React                    from 'react'

import { selectIconStyles }     from './select-icon.styles.css.js'

export const SelectIcon = (props: SelectIconProps): ReactElement => (
  <Icon className={selectIconStyles} {...props} />
)
