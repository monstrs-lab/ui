import styled    from '@emotion/styled'
import { Track } from '@radix-ui/react-slider'

export const SliderTrack = styled(Track)({
  backgroundColor: 'black',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
})