import styled             from '@emotion/styled'

import React              from 'react'
import { FC }             from 'react'

import { ButtonProps }    from '@ui-parts/button'
import { ContentDivider } from '@ui-primitives/content-divider'

import { baseStyles }     from './button.styles'
import { shapeStyles }    from './button.styles'
import { contentStyles }  from './button.styles'
import { variantStyles }  from './button.styles'

export const ButtonElement = styled.button(baseStyles, contentStyles, shapeStyles, variantStyles)

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonElement {...props}>
    <ContentDivider divider={12}>{children}</ContentDivider>
  </ButtonElement>
)
