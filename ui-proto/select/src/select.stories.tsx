import React                         from 'react'

import { Box }                       from '@ui-proto/layout'

import { SelectGroup }               from './select-group.component'
import { SelectItem }                from './select-item.component'
import { SelectLabel }               from './select-label.component'
import { SelectSeparator }           from './select-separator.component'
import { Select as SelectComponent } from './select.component'

export default {
  title: 'Components/Select',
}

export const Select = ({ containerWith }) => (
  <Box width={containerWith}>
    <SelectComponent defaultValue='blueberry'>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='blueberry'>Blueberry</SelectItem>
        <SelectItem value='grapes'>Grapes</SelectItem>
        <SelectItem value='pineapple'>Pineapple</SelectItem>
      </SelectGroup>

      <SelectSeparator />

      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value='aubergine'>Aubergine</SelectItem>
        <SelectItem value='broccoli'>Broccoli</SelectItem>
        <SelectItem value='carrot' disabled>
          Carrot
        </SelectItem>
        <SelectItem value='courgette'>Courgette</SelectItem>
        <SelectItem value='leek'>leek</SelectItem>
      </SelectGroup>

      <SelectSeparator />

      <SelectGroup>
        <SelectLabel>Meat</SelectLabel>
        <SelectItem value='beef'>Beef</SelectItem>
        <SelectItem value='chicken'>Chicken</SelectItem>
        <SelectItem value='lamb'>Lamb</SelectItem>
        <SelectItem value='pork'>Pork</SelectItem>
      </SelectGroup>
    </SelectComponent>
  </Box>
)

Select.args = {
  containerWith: 200,
}

Select.argTypes = {
  containerWith: {
    name: 'Контейнер',
    description: 'Ширина контейнера',
    table: {
      category: 'Наполнение',
    },
    control: {
      type: 'range',
      min: 200,
      max: 1200,
      step: 10,
    },
  },
}
