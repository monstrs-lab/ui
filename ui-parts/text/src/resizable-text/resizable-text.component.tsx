import React                             from 'react'
import { FC }                            from 'react'
import styled                            from '@emotion/styled'

import { createBaseResizableTextStyles } from './resizable-text.styles'
import { ResizableTextProps }            from './resizable-text.interfaces'
import { useResize }                     from './use-resize'

export const BaseResizableText = styled.div(createBaseResizableTextStyles())

export const ResizableText: FC<ResizableTextProps> = ({ offset, ...props }) => {
  const { node, style } = useResize(offset)

  return <BaseResizableText ref={node} style={style} {...props} />
}
