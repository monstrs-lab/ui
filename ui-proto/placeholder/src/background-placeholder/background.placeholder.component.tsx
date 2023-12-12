import type { ReactElement }           from 'react'
import type { ReactNode }              from 'react'

import React                           from 'react'

import { backgroundPlaceholderStyles } from './background.placeholder.styles.css.js'

interface BackgroundPlaceholderProps {
  children?: ReactNode
}

export const BackgroundPlaceholder = (props: BackgroundPlaceholderProps): ReactElement => (
  <div className={backgroundPlaceholderStyles} {...props} />
)
