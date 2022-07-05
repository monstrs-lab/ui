import React                                   from 'react'

import { ToggleGroupItem }                     from './toggle-group-item.component'
import { ToggleGroup as ToggleGroupComponent } from './toggle-group-root.component'

export default {
  title: 'Components/ToggleGroup',
}

export const ToggleGroup = ({ type }) => (
  <ToggleGroupComponent type={type} defaultValue='center' aria-label='Text alignment'>
    <ToggleGroupItem value='left' aria-label='Left aligned'>
      First
    </ToggleGroupItem>
    <ToggleGroupItem value='center' aria-label='Center aligned'>
      Second
    </ToggleGroupItem>
    <ToggleGroupItem value='right' aria-label='Right aligned'>
      Third
    </ToggleGroupItem>
  </ToggleGroupComponent>
)

ToggleGroup.args = {
  type: 'single',
}

ToggleGroup.argTypes = {
  type: {
    name: 'Тип',
    description: 'Количество елементов выбираемых за раз',
    control: {
      type: 'radio',
      options: ['single', 'multiple'],
    },
  },
}
