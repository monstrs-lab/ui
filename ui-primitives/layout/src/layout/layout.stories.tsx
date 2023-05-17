import type { LayoutProps }          from './layout.interfaces'

import React                         from 'react'

import { Layout as LayoutComponent } from './layout.component'

export default {
  title: 'Components/Layout',
}

export const Layout = ({ display, width, height }: LayoutProps) => (
  <LayoutComponent display={display} width={width} height={height}>
    <div style={{ width: '100%', height: '100%', background: 'red' }} />
  </LayoutComponent>
)

Layout.args = {
  display: 'flex',
  width: [300, 200, 100],
  height: [300, 200, 100],
}

Layout.argTypes = {}
