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
export interface PlusIconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  color?: string | `$${keyof typeof vars.colors}`
}
export const PlusIcon = ({ color, ...props }: PlusIconProps): ReactElement => (
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
      d='M3.875 12C3.875 7.51269 7.51269 3.875 12 3.875C16.4873 3.875 20.125 7.51269 20.125 12C20.125 16.4873 16.4873 20.125 12 20.125C7.51269 20.125 3.875 16.4873 3.875 12ZM12 2.125C6.54619 2.125 2.125 6.54619 2.125 12C2.125 17.4538 6.54619 21.875 12 21.875C17.4538 21.875 21.875 17.4538 21.875 12C21.875 6.54619 17.4538 2.125 12 2.125ZM12.875 8C12.875 7.51675 12.4832 7.125 12 7.125C11.5168 7.125 11.125 7.51675 11.125 8V11.125L8 11.125C7.51675 11.125 7.125 11.5168 7.125 12C7.125 12.4832 7.51675 12.875 8 12.875L11.125 12.875V16C11.125 16.4832 11.5168 16.875 12 16.875C12.4832 16.875 12.875 16.4832 12.875 16V12.875L16 12.875C16.4832 12.875 16.875 12.4832 16.875 12C16.875 11.5168 16.4833 11.125 16 11.125L12.875 11.125V8Z'
      fill={getColor(color) || '#1F1F27'}
    />
  </svg>
)
