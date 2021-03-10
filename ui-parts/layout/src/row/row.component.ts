import styled     from '@emotion/styled'

import { Layout } from '../layout'

const Row = styled(Layout)()

Row.defaultProps = {
  boxSizing: 'border-box',
  flexDirection: 'row',
  display: 'flex',
  width: '100%',
}

export { Row }
