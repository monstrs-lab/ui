/* eslint-disable react/prop-types */

import type { JSX }                        from 'react'

import React                               from 'react'

import { AccordionContent }                from './accordion-content.component'
import { AccordionItem }                   from './accordion-item.component'
import { Accordion as AccordionComponent } from './accordion-root.component'
import { AccordionTrigger }                from './accordion-trigger.component'

export default {
  title: 'Components/Accordion',
}

export const Accordion = ({ type }): JSX.Element => (
  <AccordionComponent collapsible type={type} defaultValue='item-1'>
    <AccordionItem value='item-1'>
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>

    <AccordionItem value='item-2'>
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value='item-3'>
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </AccordionComponent>
)

Accordion.args = {
  type: 'single',
}

Accordion.argTypes = {
  type: {
    name: 'Тип',
    description: 'Количество елементов открываемых в одно время',
    control: {
      type: 'radio',
      options: ['single', 'multiple'],
    },
  },
}
