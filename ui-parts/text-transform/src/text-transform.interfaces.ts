export interface TextTransformProps {
  children: string
  uppercase?: boolean
  lowercase?: boolean
  firstletter?: boolean
  lastletter?: boolean
  substr?: number | [number, number]
  replace?: [string, string]
}
