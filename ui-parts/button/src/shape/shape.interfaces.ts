export type ButtonShapeType = 'rectangle' | 'square' | 'circle'

export interface ButtonShapeRoudingProps {
  rounding?: number | boolean
}

export interface ButtonShapeOffsetProps {
  offset?: number | boolean
}

export interface ButtonShapeProps extends ButtonShapeRoudingProps, ButtonShapeOffsetProps {
  shape?: ButtonShapeType
  fill?: boolean
}

export interface ButtonShapeStyles {
  size: number
  fontFamily?: string | Function
  fontSize?: number | Function
  fontWeight?: string | number | Function
  rounding?: number
  offsetRatio?: number
}
