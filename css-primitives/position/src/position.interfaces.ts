import type { Properties } from 'csstype'

export interface PositionProps {
  position?:
    | Properties['position']
    | [Properties['position'], Properties['position'], Properties['position']]
  zIndex?: Properties['zIndex'] | [Properties['zIndex'], Properties['zIndex'], Properties['zIndex']]
  top?: Properties['top'] | [Properties['top'], Properties['top'], Properties['top']]
  right?: Properties['right'] | [Properties['right'], Properties['right'], Properties['right']]
  bottom?: Properties['bottom'] | [Properties['bottom'], Properties['bottom'], Properties['bottom']]
  left?: Properties['left'] | [Properties['left'], Properties['left'], Properties['left']]
}
