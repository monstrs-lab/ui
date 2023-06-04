import type { AccordionTriggerProps }         from '@radix-ui/react-accordion'
import type { Trigger as CollapsibleTrigger } from '@radix-ui/react-collapsible'
import type { ElementRef }                    from 'react'

import { Trigger }                            from '@radix-ui/react-accordion'
import styled                                 from '@emotion/styled'
import { forwardRef }                         from 'react'
import React                                  from 'react'

import { Text }                               from '@ui-proto/text'

import { AccordionChevron }                   from './accordion-chevron.component'
import { AccordionHeader }                    from './accordion-header.component'

export const AccordionTriggerContainer = styled(Trigger)({
  all: 'unset',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: `0 1px 0 black`,
  '&[data-state="closed"]': { backgroundColor: 'white' },
  '&[data-state="open"]': { backgroundColor: 'white' },
  '&:hover': { backgroundColor: 'rgb(242,242,242)' },
})

export const AccordionTrigger = forwardRef<
  ElementRef<typeof CollapsibleTrigger>,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <AccordionHeader>
    <AccordionTriggerContainer {...props} ref={forwardedRef}>
      <Text>{children}</Text>
      <AccordionChevron aria-hidden />
    </AccordionTriggerContainer>
  </AccordionHeader>
))
