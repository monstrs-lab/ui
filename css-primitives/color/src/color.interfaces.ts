import type { Properties } from 'csstype'

export interface ColorProps {
  color?: Properties['color'] | [Properties['color'], Properties['color'], Properties['color']]
  backgroundColor?:
    | Properties['backgroundColor']
    | [Properties['backgroundColor'], Properties['backgroundColor'], Properties['backgroundColor']]
  opacity?:
    | Properties['opacity']
    | [Properties['opacity'], Properties['opacity'], Properties['opacity']]
}
