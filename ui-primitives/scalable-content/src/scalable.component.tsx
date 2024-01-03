import type { FC }                from 'react'
import type { DetailedHTMLProps } from 'react'
import type { HTMLAttributes }    from 'react'

import React                      from 'react'

import { scalableStyles }         from './scalable.styles.css'

export const Scalable: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (
  props
) => <div className={scalableStyles} {...props} />
