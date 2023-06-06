import type { JSX }                  from 'react'

import type { LayoutProps }          from './layout.interfaces'

import React                         from 'react'

import { Layout as LayoutComponent } from './layout.component'

export default {
  title: 'Components/Layout',
}

export const Layout = ({
  display,
  width,
  height,
  flexDirection,
  justifyContent,
  alignItems,
}: LayoutProps): JSX.Element => (
  <LayoutComponent
    display={display}
    width={width}
    height={height}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    <div style={{ width: '100%', height: '100%', background: 'red' }} />
  </LayoutComponent>
)

Layout.args = {
  display: 'flex',
  width: { mobile: '300px', tablet: '200px', desktop: '100px' },
  height: { mobile: '300px', tablet: '200px', desktop: '100px' },
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
}

Layout.argTypes = {}
