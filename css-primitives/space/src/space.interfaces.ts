import type { Properties } from 'csstype'

export interface SpaceProps {
  marginTop?:
    | Properties['marginTop']
    | [Properties['marginTop'], Properties['marginTop'], Properties['marginTop']]
  marginRight?:
    | Properties['marginRight']
    | [Properties['marginRight'], Properties['marginRight'], Properties['marginRight']]
  marginBottom?:
    | Properties['marginBottom']
    | [Properties['marginBottom'], Properties['marginBottom'], Properties['marginBottom']]
  marginLeft?:
    | Properties['marginLeft']
    | [Properties['marginLeft'], Properties['marginLeft'], Properties['marginLeft']]
  paddingTop?:
    | Properties['paddingTop']
    | [Properties['paddingTop'], Properties['paddingTop'], Properties['paddingTop']]
  paddingRight?:
    | Properties['paddingRight']
    | [Properties['paddingRight'], Properties['paddingRight'], Properties['paddingRight']]
  paddingBottom?:
    | Properties['paddingBottom']
    | [Properties['paddingBottom'], Properties['paddingBottom'], Properties['paddingBottom']]
  paddingLeft?:
    | Properties['paddingLeft']
    | [Properties['paddingLeft'], Properties['paddingLeft'], Properties['paddingLeft']]
}
