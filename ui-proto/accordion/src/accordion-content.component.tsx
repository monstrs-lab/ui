import type { AccordionContentProps }   from '@radix-ui/react-accordion'
import type { Root as CollapsibleRoot } from '@radix-ui/react-collapsible'
import type { ElementRef }              from 'react'

import { Content }                      from '@radix-ui/react-accordion'
import { keyframes }                    from '@emotion/react'
import styled                           from '@emotion/styled'
import { forwardRef }                   from 'react'
import React                            from 'react'

import { Text }                         from '@ui-proto/text'

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const AccordionContentContainer = styled(Content)({
  overflow: 'hidden',
  backgroundColor: 'rgb(242,242,242)',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
})

export const AccordionContentText = styled(Text)({
  padding: '16px 20px',
})

export const AccordionContent = forwardRef<
  ElementRef<typeof CollapsibleRoot>,
  AccordionContentProps
>(({ children, ...props }, forwardedRef) => (
  <AccordionContentContainer {...props} ref={forwardedRef}>
    <AccordionContentText>{children}</AccordionContentText>
  </AccordionContentContainer>
))
