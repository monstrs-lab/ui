import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import React                 from 'react'

import { inputLabelStyles }  from './input-label.styles.css.js'

interface InputLabelProps {
  children?: ReactNode
}

export const InputLabel = (props: InputLabelProps): ReactElement => (
  <div className={inputLabelStyles} {...props} />
)
