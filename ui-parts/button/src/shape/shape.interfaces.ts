export interface ButtonShapeRoudingProps {
  rounding?: number | boolean
}

export interface ButtonShapeOffsetProps {
  offset?: number | boolean
}

export interface ButtonShapeProps extends ButtonShapeRoudingProps, ButtonShapeOffsetProps {
  fill?: boolean
  equal?: boolean
  round?: boolean
}
