import type { Properties } from 'csstype'

export interface ShadowProps {
  boxShadow?:
    | Properties['boxShadow']
    | [Properties['boxShadow'], Properties['boxShadow'], Properties['boxShadow']]
  textShadow?:
    | Properties['textShadow']
    | [Properties['textShadow'], Properties['textShadow'], Properties['textShadow']]
}
