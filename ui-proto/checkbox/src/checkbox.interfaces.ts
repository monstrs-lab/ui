import type { CheckedState } from '@radix-ui/react-checkbox'

export interface CheckboxProps {
  id?: string
  required?: boolean
  value?: CheckedState
  onChange?: (value: CheckedState) => void
}
