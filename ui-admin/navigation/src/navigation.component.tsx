import type { ReactElement }         from 'react'
import type { ReactNode }            from 'react'

import type { NavigationTitleProps } from './navigation-title/index.js'

import React                         from 'react'

import { Row }                       from '@ui-admin/layout'
import { Layout }                    from '@ui-admin/layout'

import { NavigationRoot }            from './navigation-root/index.js'
import { NavigationTitle }           from './navigation-title/index.js'

export interface NavigationProps {
  title: NavigationTitleProps['children']
  left?: ReactNode
  right?: ReactNode
}

export const Navigation = ({ left, title, right }: NavigationProps): ReactElement => (
  <NavigationRoot>
    <Row>
      {!!left && <Layout pr='1x'>{left}</Layout>}
      <Layout flexGrow={1}>
        <NavigationTitle>{title}</NavigationTitle>
      </Layout>
      {!!right && <Layout>{right}</Layout>}
    </Row>
  </NavigationRoot>
)
