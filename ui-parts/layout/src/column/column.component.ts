import styled     from '@emotion/styled'

import { Layout } from '../layout'

const Column = styled(Layout)()

Column.defaultProps = {
  boxSizing: 'border-box',
  flexDirection: 'column',
  display: 'flex',
  width: '100%',
}

export { Column }
