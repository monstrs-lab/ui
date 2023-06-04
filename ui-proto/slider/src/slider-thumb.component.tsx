import { Thumb } from '@radix-ui/react-slider'
import styled    from '@emotion/styled'

export const SliderThumb = styled(Thumb)({
  all: 'unset',
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: 10,
  '&:hover': { backgroundColor: 'rgb(224, 224, 224)' },
  '&:focus': { boxShadow: `0 0 0 2px #1EA7FD` },
})
