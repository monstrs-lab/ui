/* eslint-disable @next/next/no-img-element */

import type { ReactElement } from 'react'

import React                 from 'react'

import { sidebarLogoStyles } from './sidebar-logo.styles.css.js'

export const SidebarLogo = (): ReactElement => (
  <img className={sidebarLogoStyles} src='/images/admin-logos_transparent.png' alt='logo' />
)
