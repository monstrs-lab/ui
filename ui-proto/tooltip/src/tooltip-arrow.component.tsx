import { Arrow } from '@radix-ui/react-tooltip'
import React     from 'react'

export const TooltipArrow = () => (
  <Arrow asChild>
    <svg viewBox='0 0 300 100' fill='none'>
      <polygon points='0,0 300,0 150,100' fill='white' />
      <line x1='150' y1='100' x2='300' y2='0' stroke='black' strokeWidth={8} />
      <line x1='0' y1='0' x2='150' y2='100' stroke='black' strokeWidth={8} />
    </svg>
  </Arrow>
)
