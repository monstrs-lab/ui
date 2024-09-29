import type { SelectContentProps } from '@radix-ui/react-select'
import type { ReactElement }       from 'react'

import { Content }                 from '@radix-ui/react-select'
import React                       from 'react'

import { selectContentStyles }     from './select-content.styles.css.js'

export const SelectContent = (props: SelectContentProps): ReactElement => (
  <Content className={selectContentStyles} {...props} />
)
