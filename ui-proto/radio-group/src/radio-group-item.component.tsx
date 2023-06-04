import { Item } from '@radix-ui/react-radio-group'
import styled   from '@emotion/styled'

export const RadioGroupItem = styled(Item)({
  all: 'unset',
  backgroundColor: 'white',
  width: 24,
  height: 24,
  borderRadius: '100%',
  borderWidth: 2,
  borderStyle: 'solid',
  boxSizing: 'border-box',
  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
  '&:focus': { borderColor: '#1EA7FD' },
})
