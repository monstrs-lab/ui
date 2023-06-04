/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

import type { Properties } from 'csstype'

export type Width = Properties['width'] | number
export type Height = Properties['height'] | number
export type MinWidth = Properties['minWidth'] | number
export type MinHeight = Properties['minHeight'] | number
export type MaxWidth = Properties['maxWidth'] | number
export type MaxHeight = Properties['maxHeight'] | number

export interface LayoutProps {
  width?: Width | [Width, Width, Width]
  height?: Height | [Height, Height, Height]
  minWidth?: MinWidth | [MinWidth, MinWidth, MinWidth]
  minHeight?: MinHeight | [MinHeight, MinHeight, MinHeight]
  maxWidth?: MaxWidth | [MaxWidth, MaxWidth, MaxWidth]
  maxHeight?: MaxHeight | [MaxHeight, MaxHeight, MaxHeight]
  display?:
    | Properties['display']
    | [Properties['display'], Properties['display'], Properties['display']]
  verticalAlign?:
    | Properties['verticalAlign']
    | [Properties['verticalAlign'], Properties['verticalAlign'], Properties['verticalAlign']]
  overflowX?:
    | Properties['overflowX']
    | [Properties['overflowX'], Properties['overflowX'], Properties['overflowX']]
  overflowY?:
    | Properties['overflowY']
    | [Properties['overflowY'], Properties['overflowY'], Properties['overflowY']]
  boxSizing?:
    | Properties['boxSizing']
    | [Properties['boxSizing'], Properties['boxSizing'], Properties['boxSizing']]
}
