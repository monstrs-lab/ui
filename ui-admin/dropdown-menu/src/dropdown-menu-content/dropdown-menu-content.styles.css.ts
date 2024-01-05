import { style }     from '@vanilla-extract/css'
import { keyframes } from '@vanilla-extract/css'
import { recipe }    from '@vanilla-extract/recipes'

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

export const dropdownMenuContentBaseStyles = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 192,
  borderRadius: 12,
  backgroundColor: '#303037',
  boxShadow: '0px 0px 64px 0px rgba(0, 0, 0, 0.40)',
  zIndex: 100,
  overflow: 'hidden',
  maxWidth: '100vw',
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

export const dropdownMenuContentStyles = recipe({
  base: dropdownMenuContentBaseStyles,

  variants: {
    fill: {
      true: {
        width: 'var(--radix-dropdown-menu-trigger-width)',
      },
    },
  },
})
