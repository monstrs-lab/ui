export type ButtonShapeType = 'rectangle' | 'square' | 'circle'

export interface ButtonShapeRoudingProps {
  rounding?: number | boolean
}

export interface ButtonShapeProps extends ButtonShapeRoudingProps {
  shape?: ButtonShapeType
  fill?: boolean
}

export interface ButtonShapeStyles {
  size: number
  fontFamily?: string | Function
  fontSize?: number | Function
  fontWeight?: string | number | Function
  rounding?: number
  paddingLeft?: number
  paddingRight?: number
  paddingRatio?: number
}
