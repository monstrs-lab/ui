import { Indicator } from '@radix-ui/react-radio-group'
import styled        from '@emotion/styled'

export const RadioGroupIndicator = styled(Indicator)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: 'black',
  },
})
