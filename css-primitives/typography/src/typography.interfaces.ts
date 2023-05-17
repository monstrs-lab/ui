import type { Properties } from 'csstype'

export interface TypographyProps {
  fontFamily?:
    | Properties['fontFamily']
    | [Properties['fontFamily'], Properties['fontFamily'], Properties['fontFamily']]
  fontSize?:
    | Properties['fontSize']
    | [Properties['fontSize'], Properties['fontSize'], Properties['fontSize']]
  fontWeight?:
    | Properties['fontWeight']
    | [Properties['fontWeight'], Properties['fontWeight'], Properties['fontWeight']]
  lineHeight?:
    | Properties['lineHeight']
    | [Properties['lineHeight'], Properties['lineHeight'], Properties['lineHeight']]
  textAlign?:
    | Properties['textAlign']
    | [Properties['textAlign'], Properties['textAlign'], Properties['textAlign']]
  letterSpacing?:
    | Properties['letterSpacing']
    | [Properties['letterSpacing'], Properties['letterSpacing'], Properties['letterSpacing']]
  fontStyle?:
    | Properties['fontStyle']
    | [Properties['fontStyle'], Properties['fontStyle'], Properties['fontStyle']]
}
