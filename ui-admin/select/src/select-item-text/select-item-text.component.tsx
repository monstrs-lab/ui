import type { SelectItemTextProps } from '@radix-ui/react-select'
import type { ReactElement }        from 'react'

import { ItemText }                 from '@radix-ui/react-select'
import React                        from 'react'

import { selectItemTextStyles }     from './select-item-text.styles.css.js'

export const SelectItemText = (props: SelectItemTextProps): ReactElement => (
  <ItemText className={selectItemTextStyles} {...props} />
)
