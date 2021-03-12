import { InputHTMLAttributes } from 'react'
import { FormEventHandler }    from 'react'

import { InputShapeProps }     from './shape'
import { OnChangeCallback }    from './value'

export interface InputProps
  extends Omit<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, 'onChange'>,
    InputShapeProps {
  onChangeNative?: FormEventHandler<HTMLInputElement>
  onChange?: OnChangeCallback
}
