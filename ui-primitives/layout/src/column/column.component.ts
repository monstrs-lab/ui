import type { FC }     from 'react'

import styled          from '@emotion/styled'

import { LayoutProps } from '../layout'
import { Layout }      from '../layout'

const Column: FC<LayoutProps> = styled(Layout)()

Column.defaultProps = {
  boxSizing: 'border-box',
  flexDirection: 'column',
  display: 'flex',
  width: '100%',
}

export { Column }