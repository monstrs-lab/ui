import type { FC }          from 'react'

import type { LayoutProps } from '../layout'

import React                from 'react'

import { Layout }           from '../layout'

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
