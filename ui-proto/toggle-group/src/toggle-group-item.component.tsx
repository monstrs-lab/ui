import { Item } from '@radix-ui/react-toggle-group'
import styled   from '@emotion/styled'

export const ToggleGroupItem = styled(Item)({
  all: 'unset',
  backgroundColor: 'white',
  color: 'black',
  height: 35,
  padding: '0 10px',
  display: 'flex',
  fontSize: 14,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 1,
  fontFamily: '"Noto Sans"',
  '&:first-child': { marginLeft: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
  '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  '&:hover': { backgroundColor: 'rgb(242,242,242)' },
  '&[data-state=on]': { backgroundColor: 'rgb(224, 224, 224)', color: 'hsl(0 0% 17.9%)' },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px #1EA7FD` },
})
