import type { RootProps }    from '@ui-primitives/input'
import type { ReactElement } from 'react'

import React                 from 'react'

import { Root }              from '@ui-primitives/input'

import { inputRootStyles }   from './input-root.styles.css.js'

export const InputRoot = (props: RootProps): ReactElement => (
  <Root className={inputRootStyles} {...props} />
)
