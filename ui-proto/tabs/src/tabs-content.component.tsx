import styled      from '@emotion/styled'
import { Content } from '@radix-ui/react-tabs'

export const TabsContent = styled(Content)({
  flexGrow: 1,
  padding: 20,
  backgroundColor: 'white',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
  '&:focus': { boxShadow: `0 0 0 2px #1EA7FD` },
})
