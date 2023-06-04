/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

import type { Properties } from 'csstype'

export type FlexBasis = Properties['flexBasis'] | number

export interface FlexboxProps {
  alignItems?:
    | Properties['alignItems']
    | [Properties['alignItems'], Properties['alignItems'], Properties['alignItems']]
  alignContent?:
    | Properties['alignContent']
    | [Properties['alignContent'], Properties['alignContent'], Properties['alignContent']]
  justifyItems?:
    | Properties['justifyItems']
    | [Properties['justifyItems'], Properties['justifyItems'], Properties['justifyItems']]
  justifyContent?:
    | Properties['justifyContent']
    | [Properties['justifyContent'], Properties['justifyContent'], Properties['justifyContent']]
  flexWrap?:
    | Properties['flexWrap']
    | [Properties['flexWrap'], Properties['flexWrap'], Properties['flexWrap']]
  flexDirection?:
    | Properties['flexDirection']
    | [Properties['flexDirection'], Properties['flexDirection'], Properties['flexDirection']]
  flexGrow?:
    | Properties['flexGrow']
    | [Properties['flexGrow'], Properties['flexGrow'], Properties['flexGrow']]
  flexShrink?:
    | Properties['flexShrink']
    | [Properties['flexShrink'], Properties['flexShrink'], Properties['flexShrink']]
  flexBasis?: FlexBasis | [FlexBasis, FlexBasis, FlexBasis]
  justifySelf?:
    | Properties['justifySelf']
    | [Properties['justifySelf'], Properties['justifySelf'], Properties['justifySelf']]
  alignSelf?:
    | Properties['alignSelf']
    | [Properties['alignSelf'], Properties['alignSelf'], Properties['alignSelf']]
  order?: Properties['order'] | [Properties['order'], Properties['order'], Properties['order']]
}
