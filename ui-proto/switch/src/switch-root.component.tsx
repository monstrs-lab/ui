import styled   from '@emotion/styled'
import { Root } from '@radix-ui/react-switch'

export const SwitchRoot = styled(Root)({
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: 'black',
  borderRadius: '9999px',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px #1EA7FD` },
  '&[data-state="checked"]': { backgroundColor: 'black' },
})
