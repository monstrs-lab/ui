import type { ReactElement }    from 'react'
import type { ReactNode }       from 'react'

import React                    from 'react'

import { inputContainerStyles } from './input-container.styles.css.js'

interface InputContainerProps {
  children?: ReactNode
}

export const InputContainer = (props: InputContainerProps): ReactElement => (
  <div className={inputContainerStyles} {...props} />
)
