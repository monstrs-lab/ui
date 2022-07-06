import styled      from '@emotion/styled'
import { Trigger } from '@radix-ui/react-select'

export const SelectTrigger = styled(Trigger)({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  width: '100%',
  gap: 5,
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid black',
  fontFamily: '"Noto Sans"',
  '&:hover': { backgroundColor: 'rgb(224, 224, 224)' },
  '&:focus': { boxShadow: `0 0 0 2px #1EA7FD` },
})
