import { style }     from '@vanilla-extract/css'
import { keyframes } from '@vanilla-extract/css'

import { colors }    from '@ui-admin/theme'
import { vars }      from '@ui-admin/theme'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const selectContentStyles = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 12,
  backgroundColor: colors.gray,
  zIndex: vars.zIndex['100z'],
  overflow: 'hidden',
  maxWidth: '100vw',
  maxHeight: '176px',
  minWidth: 'var(--radix-select-trigger-width)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  animationFillMode: 'forwards',
  willChange: 'transform, opacity',
  selectors: {
    '&[data-state="open"][data-side="top"]': {
      animationName: slideDownAndFade,
    },
    '&[data-state="open"][data-side="right"]': {
      animationName: slideLeftAndFade,
    },
    '&[data-state="open"][data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
    '&[data-state="open"][data-side="left"]': {
      animationName: slideRightAndFade,
    },
  },
})
