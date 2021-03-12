import { styleFn }              from 'styled-system'
import { ifProp }               from 'styled-tools'

import { execAndSerialize }     from '@ui-parts/styles'
import { combine }              from '@ui-parts/styles'

import { AttachContainerProps } from './container.interfaces'
import { ContainerStyles }      from './container.interfaces'

export const createBaseContainerStyles: styleFn = () => () => ({
  width: '100%',
  display: 'flex',
})

export const createAttachContainerStyles: styleFn = (defaultAttachOffset: number = 1) =>
  ifProp('attach', ({ attachOffset }: AttachContainerProps) => ({
    position: 'relative',
    marginRight: attachOffset || defaultAttachOffset,
    '&:focus': {
      zIndex: 1,
    },
    '&:hover': {
      zIndex: 2,
    },
  }))

export const createContainerStyles = ({ attachOffset = 1 }: ContainerStyles = {}): styleFn =>
  execAndSerialize(combine(createBaseContainerStyles(), createAttachContainerStyles(attachOffset)))
