import type { Properties } from 'csstype'

export type FontSize = Properties['fontSize'] | number
export type FontWeight = Properties['fontWeight'] | number
export type LineHeight = Properties['lineHeight'] | number

export interface TypographyProps {
  fontFamily?:
    | Properties['fontFamily']
    | [Properties['fontFamily'], Properties['fontFamily'], Properties['fontFamily']]
  fontSize?: FontSize | [FontSize, FontSize, FontSize]
  fontWeight?: FontWeight | [FontWeight, FontWeight, FontWeight]
  lineHeight?: LineHeight | [LineHeight, LineHeight, LineHeight]
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
