import type { FC }                   from 'react'

import type { ScalableContentProps } from './scalable-content.interfaces'

import React                         from 'react'

import { Scalable }                  from './scalable.component'
import { useScale }                  from './use-scale.hook'

export const ScalableContent: FC<ScalableContentProps> = (props) => {
  const { ref, style } = useScale()

  return <Scalable ref={ref} style={style} {...props} />
}
