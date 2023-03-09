import styled                          from '@emotion/styled'
import { PlusIcon }                    from '@radix-ui/react-icons'

import React                           from 'react'

import { Text }                        from '@ui-proto/text'

import { TooltipContent }              from './tooltip-content.component'
import { Tooltip as TooltipComponent } from './tooltip.component'
import { TooltipTrigger }              from './tooltip.component'

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
  title: 'Components/Tooltip',
}

export const Tooltip = ({ side, sideOffset }) => (
  <TooltipComponent>
    <TooltipTrigger asChild>
      <IconButton>
        <PlusIcon />
      </IconButton>
    </TooltipTrigger>
    <TooltipContent side={side} sideOffset={sideOffset}>
      <Text>Add to library</Text>
    </TooltipContent>
  </TooltipComponent>
)

Tooltip.args = {
  side: 'bottom',
  sideOffset: 5,
}

Tooltip.argTypes = {
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
