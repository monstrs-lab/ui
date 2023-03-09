import styled               from '@emotion/styled'
import { ScrollDownButton } from '@radix-ui/react-select'
import { ScrollUpButton }   from '@radix-ui/react-select'

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: 'black',
  cursor: 'default',
}

export const SelectScrollDownButton = styled(ScrollDownButton)(scrollButtonStyles)

export const SelectScrollUpButton = styled(ScrollUpButton)(scrollButtonStyles)
