import React                        from 'react'
import { FC }                       from 'react'
import { forwardRef }               from 'react'
import { ForwardRefRenderFunction } from 'react'
import styled                       from '@emotion/styled'

import { Container }                from '@ui-parts/input'
import { Wrapper }                  from '@ui-parts/input'
import { useChangeValue }           from '@ui-parts/input'

import { InputProps }               from './input.interfaces'
import { baseStyles }               from './input.styles'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'

export const InputElement = styled.input(baseStyles, shapeStyles, appearanceStyles)

export const InputWithoutRef: ForwardRefRenderFunction<FC<InputProps>, InputProps> = (
  { value, disabled, size, onChange, onChangeNative, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  return (
    <Container>
      <Wrapper>
        <InputElement ref={ref} {...props} size={size} value={value} onChange={changeValue} />
      </Wrapper>
    </Container>
  )
}

export const Input = forwardRef<FC<InputProps>, InputProps>(InputWithoutRef)
