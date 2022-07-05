import React                                   from 'react'

import { ToggleGroupItem }                     from './toggle-group-item.component'
import { ToggleGroup as ToggleGroupComponent } from './toggle-group-root.component'

export default {
  title: 'Components/ToggleGroup',
}

export const ToggleGroup = ({ side, sideOffset }) => (
  <ToggleGroupComponent type='single' defaultValue='center' aria-label='Text alignment'>
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
