import type { PopoverContentProps } from '@radix-ui/react-popover'
import type { FC }                  from 'react'

import { Cross2Icon }               from '@radix-ui/react-icons'
import { Content }                  from '@radix-ui/react-popover'
import { keyframes }                from '@emotion/react'
import styled                       from '@emotion/styled'
import React                        from 'react'

import { PopoverArrow }             from './popover-arrow.component'
import { PopoverClose }             from './popover-close.component'

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

export const PopoverContentContainer = styled(Content)({
  borderRadius: 4,
  padding: 20,
  width: 260,
  backgroundColor: 'white',
  border: '1px solid black',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

export const PopoverContent: FC<PopoverContentProps> = ({ children, ...props }) => (
  <PopoverContentContainer {...props}>
    {children}
    <PopoverArrow />
    <PopoverClose aria-label='Close'>
      <Cross2Icon />
    </PopoverClose>
  </PopoverContentContainer>
)
