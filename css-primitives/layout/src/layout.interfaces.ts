import type { Properties } from 'csstype'

export interface LayoutProps {
  width?: Properties['width'] | [Properties['width'], Properties['width'], Properties['width']]
  height?: Properties['height'] | [Properties['height'], Properties['height'], Properties['height']]
  minWidth?:
    | Properties['minWidth']
    | [Properties['minWidth'], Properties['minWidth'], Properties['minWidth']]
  minHeight?:
    | Properties['minHeight']
    | [Properties['minHeight'], Properties['minHeight'], Properties['minHeight']]
  maxWidth?:
    | Properties['maxWidth']
    | [Properties['maxWidth'], Properties['maxWidth'], Properties['maxWidth']]
  maxHeight?:
    | Properties['maxHeight']
    | [Properties['maxHeight'], Properties['maxHeight'], Properties['maxHeight']]
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
  overflow?:
    | Properties['overflow']
    | [Properties['overflow'], Properties['overflow'], Properties['overflow']]
}