import styled              from '@emotion/styled'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export const AccordionChevron = styled(ChevronDownIcon)({
  color: 'black',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})
