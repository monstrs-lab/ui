import type { JSX }                      from 'react'

import React                             from 'react'

import { Checkbox as CheckboxComponent } from './checkbox.component'

export default {
  title: 'Components/Checkbox',
}

export const Checkbox = (props): JSX.Element => <CheckboxComponent {...props} />
