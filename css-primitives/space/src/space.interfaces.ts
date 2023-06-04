/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

import type { Properties } from 'csstype'

export type MarginTop = Properties['marginTop'] | number
export type MarginRight = Properties['marginRight'] | number
export type MarginBottom = Properties['marginBottom'] | number
export type MarginLeft = Properties['marginLeft'] | number
export type PaddingTop = Properties['paddingTop'] | number
export type PaddingRight = Properties['paddingRight'] | number
export type PaddingBottom = Properties['paddingBottom'] | number
export type PaddingLeft = Properties['paddingLeft'] | number

export interface SpaceProps {
  marginTop?: MarginTop | [MarginTop, MarginTop, MarginTop]
  marginRight?: MarginRight | [MarginRight, MarginRight, MarginRight]
  marginBottom?: MarginBottom | [MarginBottom, MarginBottom, MarginBottom]
  marginLeft?: MarginLeft | [MarginLeft, MarginLeft, MarginLeft]
  paddingTop?: PaddingTop | [PaddingTop, PaddingTop, PaddingTop]
  paddingRight?: PaddingRight | [PaddingRight, PaddingRight, PaddingRight]
  paddingBottom?: PaddingBottom | [PaddingBottom, PaddingBottom, PaddingBottom]
  paddingLeft?: PaddingLeft | [PaddingLeft, PaddingLeft, PaddingLeft]
}
