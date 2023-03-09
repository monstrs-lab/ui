import styled      from '@emotion/styled'
import { Trigger } from '@radix-ui/react-tabs'

export const TabsTrigger = styled(Trigger)({
  all: 'unset',
  backgroundColor: 'white',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: 'rgb(224, 224, 224)',
  userSelect: 'none',
  fontFamily: '"Noto Sans"',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: 'black' },
  '&[data-state="active"]': {
    color: 'black',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px #1EA7FD` },
})
