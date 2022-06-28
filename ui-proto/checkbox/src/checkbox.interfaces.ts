import { CheckedState } from '@radix-ui/react-checkbox'

export interface CheckboxProps {
  required?: boolean
  value?: CheckedState
  onChange?(value: CheckedState): void
}
