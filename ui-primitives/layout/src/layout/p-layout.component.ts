import type { FC }     from 'react'

import styled          from '@emotion/styled'

import { flexbox }     from 'styled-system'
import { layout }      from 'styled-system'
import { space }       from 'styled-system'
import { system }      from 'styled-system'

import { LayoutProps } from './p-layout.interfaces'

const Layout: FC<LayoutProps> = styled.div(
  system({
    boxSizing: true,
  }),
  layout,
  space,
  flexbox
)

Layout.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}

export { Layout }
