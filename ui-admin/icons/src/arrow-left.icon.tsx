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
export interface ArrowLeftIconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  color?: string | `$${keyof typeof vars.colors}`
}
export const ArrowLeftIcon = ({ color, ...props }: ArrowLeftIconProps): ReactElement => (
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
      d='M15.5303 5.46973C15.8232 5.76262 15.8232 6.2375 15.5303 6.53039L10.0607 12.0001L15.5303 17.4697C15.8232 17.7626 15.8232 18.2375 15.5303 18.5304C15.2374 18.8233 14.7626 18.8233 14.4697 18.5304L8.46966 12.5304C8.17677 12.2375 8.17677 11.7626 8.46966 11.4697L14.4697 5.46973C14.7626 5.17684 15.2374 5.17684 15.5303 5.46973Z'
      fill={getColor(color) || '#1F1F27'}
    />
  </svg>
)
