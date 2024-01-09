import type { ReactElement }       from 'react'
import type { ReactNode }          from 'react'

import React                       from 'react'

import { selectPlaceholderStyles } from './select-placeholder.styles.css.js'

export interface SelectPlaceholderProps {
  children: ReactNode
}

export const SelectPlaceholder = (props: SelectPlaceholderProps): ReactElement => (
  <span className={selectPlaceholderStyles} {...props} />
)
