import type { FC }     from 'react'

import React           from 'react'

import { LayoutProps } from '../layout'
import { Layout }      from '../layout'

export const Row: FC<LayoutProps> = ({
  boxSizing = 'border-box',
  flexDirection = 'row',
  display = 'flex',
  width = '100%',
  children,
  ...props
}) => (
  <Layout
    boxSizing={boxSizing}
    flexDirection={flexDirection}
    display={display}
    width={width}
    {...props}
  >
    {children}
  </Layout>
)