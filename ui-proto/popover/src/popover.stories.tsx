import styled                          from '@emotion/styled'
import { PlusIcon }                    from '@radix-ui/react-icons'

import React                           from 'react'

import { Text }                        from '@ui-proto/text'

import { PopoverContent }              from './popover-content.component'
import { Popover as PopoverComponent } from './popover.component'
import { PopoverTrigger }              from './popover.component'

const IconButton = styled.button({
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  backgroundColor: 'white',
  border: '1px solid black',
  '&:hover': { backgroundColor: 'rgb(242,242,242)' },
  '&:focus': { borderColor: '#1EA7FD' },
})

export default {
  title: 'Components/Popover',
}

export const Popover = ({ side, sideOffset }) => (
  <PopoverComponent>
    <PopoverTrigger asChild>
      <IconButton>
        <PlusIcon />
      </IconButton>
    </PopoverTrigger>
    <PopoverContent side={side} sideOffset={sideOffset}>
      <Text>Add to library</Text>
    </PopoverContent>
  </PopoverComponent>
)

Popover.args = {
  side: 'bottom',
  sideOffset: 5,
}

Popover.argTypes = {
  side: {
    name: 'Расположение',
    description: 'Расположение относительно элемента',
    control: {
      type: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
  sideOffset: {
    name: 'Отступ от элемента',
    description: 'Отступ от элемента',
    control: {
      type: 'number',
    },
  },
}
