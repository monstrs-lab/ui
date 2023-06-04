import type { FC }          from 'react'

import type { LayoutProps } from '../layout'

import React                from 'react'

import { Layout }           from '../layout'

export const Column: FC<LayoutProps> = ({
  flexDirection = 'column',
  width = '100%',
  children,
  ...props
}) => (
  <Layout flexDirection={flexDirection} width={width} {...props}>
    {children}
  </Layout>
)
