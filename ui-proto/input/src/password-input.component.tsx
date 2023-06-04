import type { FC }         from 'react'

import type { InputProps } from './input.component'

import { EyeNoneIcon }     from '@radix-ui/react-icons'
import { EyeOpenIcon }     from '@radix-ui/react-icons'
import { useState }        from 'react'
import React               from 'react'

import { Input }           from './input.component'

export type PasswordInputProps = Omit<InputProps, 'suffix'>

export const PasswordInput: FC<PasswordInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      suffix={
        showPassword ? (
          <EyeNoneIcon
            onClick={() => {
              setShowPassword((prevState) => !prevState)
            }}
          />
        ) : (
          <EyeOpenIcon
            onClick={() => {
              setShowPassword((prevState) => !prevState)
            }}
          />
        )
      }
    />
  )
}
