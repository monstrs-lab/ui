import type { ReactElement }     from 'react'

import type { SidebarItemProps } from './sidebar-item/index.js'

import React                     from 'react'

import { SidebarItem }           from './sidebar-item/index.js'
import { SidebarLogo }           from './sidebar-logo/index.js'
import { SidebarRoot }           from './sidebar-root/index.js'

export interface SidebarProps {
  items: Array<SidebarItemProps>
}

export const Sidebar = ({ items = [] }: SidebarProps): ReactElement => (
  <SidebarRoot>
    <SidebarLogo />
    {items.map((item) => (
      <SidebarItem key={item.icon.name} icon={item.icon} />
    ))}
  </SidebarRoot>
)
