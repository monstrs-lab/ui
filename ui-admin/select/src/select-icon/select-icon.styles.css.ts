import { style }                   from '@vanilla-extract/css'

import { selectTriggerBaseStyles } from '../select-trigger/index.js'

export const selectIconStyles = style({
  display: 'flex',
  marginLeft: '8px',
  transition: 'transform 0.2s linear',
  selectors: {
    [`${selectTriggerBaseStyles}[data-state="closed"] &`]: {
      transform: 'rotate(180deg)',
    },
  },
})
