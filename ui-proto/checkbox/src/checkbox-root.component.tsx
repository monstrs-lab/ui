import { Root } from '@radix-ui/react-checkbox'
import styled   from '@emotion/styled'

export const CheckboxRoot = styled(Root)({
  all: 'unset',
  backgroundColor: 'white',
  width: 24,
  height: 24,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid black',
  boxSizing: 'border-box',
  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
  '&:focus': { borderColor: '#1EA7FD' },
})
