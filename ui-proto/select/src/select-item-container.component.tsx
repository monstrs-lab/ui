import { Item } from '@radix-ui/react-select'
import styled   from '@emotion/styled'

export const SelectItemContainer = styled(Item)({
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: 'black',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',
  fontFamily: '"Noto Sans"',

  '&[data-disabled]': {
    color: 'rgb(224, 224, 224)',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: 'black',
    color: 'white',
  },
})
