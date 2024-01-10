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
export interface MailIconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  color?: string | `$${keyof typeof vars.colors}`
}
export const MailIcon = ({ color, ...props }: MailIconProps): ReactElement => (
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
      d='M5.5 4.25C3.70507 4.25 2.25 5.70507 2.25 7.5V16.5C2.25 18.2949 3.70507 19.75 5.5 19.75H18.5C20.2949 19.75 21.75 18.2949 21.75 16.5V7.5C21.75 5.70507 20.2949 4.25 18.5 4.25H5.5ZM3.75 7.5C3.75 6.5335 4.5335 5.75 5.5 5.75H18.5C19.4665 5.75 20.25 6.5335 20.25 7.5V7.59861L12.9707 12.4515C12.3829 12.8433 11.6171 12.8433 11.0293 12.4515L3.75 7.59861V7.5ZM3.75 9.40139V16.5C3.75 17.4665 4.5335 18.25 5.5 18.25H18.5C19.4665 18.25 20.25 17.4665 20.25 16.5V9.40139L13.8028 13.6995C12.7111 14.4273 11.2889 14.4273 10.1972 13.6995L3.75 9.40139Z'
      fill={getColor(color) || '#1F1F27'}
    />
  </svg>
)
