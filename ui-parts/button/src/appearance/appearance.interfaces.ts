export interface ButtonAppearanceStyles {
  fontColor: string | Function
  backgroundColor: string | Function
  borderColor?: string | Function
  ghostBorderWidth?: number
}

export interface ButtonAppearanceProps {
  ghost?: boolean
}
