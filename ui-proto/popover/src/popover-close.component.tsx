import styled    from '@emotion/styled'
import { Close } from '@radix-ui/react-popover'

export const PopoverClose = styled(Close)({
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  position: 'absolute',
  top: 5,
  right: 5,

  '&:hover': { backgroundColor: 'rgb(224, 224, 224)' },
  '&:focus': { boxShadow: `0 0 0 2px rgb(224, 224, 224)` },
})
