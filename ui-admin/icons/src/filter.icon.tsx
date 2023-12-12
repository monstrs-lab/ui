/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import type { ReactElement } from 'react'
import type { SVGProps }     from 'react'

import React                 from 'react'

import { vars }              from '@ui-admin/theme'

const getColor = (color: string | keyof typeof vars.colors | undefined): string | undefined => {
  if (color) {
    return vars?.colors[color as keyof typeof vars.colors] as keyof typeof vars.colors as string
  }
  return undefined
}
export interface FilterIconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  color?: string | `$${keyof typeof vars.colors}`
}
export const FilterIcon = ({ color, ...props }: FilterIconProps): ReactElement => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 6C10 7.10457 9.10457 8 8 8C7.20922 8 6.52563 7.54106 6.20106 6.875H4C3.51675 6.875 3.125 6.48325 3.125 6C3.125 5.51675 3.51675 5.125 4 5.125H6.20106C6.52563 4.45894 7.20922 4 8 4C9.10457 4 10 4.89543 10 6ZM11.125 6C11.125 5.51675 11.5168 5.125 12 5.125H19.5C19.9832 5.125 20.375 5.51675 20.375 6C20.375 6.48325 19.9832 6.875 19.5 6.875H12C11.5168 6.875 11.125 6.48325 11.125 6ZM3.125 12C3.125 11.5168 3.51675 11.125 4 11.125H11.5C11.9832 11.125 12.375 11.5168 12.375 12C12.375 12.4832 11.9832 12.875 11.5 12.875H4C3.51675 12.875 3.125 12.4832 3.125 12ZM12 17.125C11.5168 17.125 11.125 17.5168 11.125 18C11.125 18.4832 11.5168 18.875 12 18.875H19.5C19.9832 18.875 20.375 18.4832 20.375 18C20.375 17.5168 19.9832 17.125 19.5 17.125H12ZM17.7989 12.875C17.4744 13.5411 16.7908 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C16.7908 10 17.4744 10.4589 17.7989 11.125H20C20.4832 11.125 20.875 11.5168 20.875 12C20.875 12.4832 20.4832 12.875 20 12.875H17.7989ZM10 18C10 19.1046 9.10457 20 8 20C7.20922 20 6.52563 19.5411 6.20106 18.875H4C3.51675 18.875 3.125 18.4832 3.125 18C3.125 17.5168 3.51675 17.125 4 17.125H6.20106C6.52563 16.4589 7.20922 16 8 16C9.10457 16 10 16.8954 10 18Z'
      fill={getColor(color) || '#1F1F27'}
    />
  </svg>
)
