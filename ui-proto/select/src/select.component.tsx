import type { SelectProps as BaseSelectProps } from '@radix-ui/react-select'
import type { FC }                             from 'react'
import type { ReactNode }                      from 'react'

import { Root }                                from '@radix-ui/react-select'
import { Viewport }                            from '@radix-ui/react-select'
import { useCallback }                         from 'react'
import { useState }                            from 'react'
import { useEffect }                           from 'react'
import React                                   from 'react'

import { ArrowDownIcon }                       from '@ui-proto/icons'

import { SelectContent }                       from './select-content/index.js'
import { SelectIcon }                          from './select-icon/index.js'
import { SelectItem }                          from './select-item/index.js'
import { SelectPlaceholder }                   from './select-placeholder/index.js'
import { SelectTrigger }                       from './select-trigger/index.js'
import { selectItemTextStyles }                from './select-item-text/index.js'

export type SelectOptionType = { value: string; label?: string }
export type SelectSizeType = 'normal'

export interface SelectProps extends BaseSelectProps {
  options: Array<SelectOptionType>
  placeholder?: ReactNode | string
  size?: SelectSizeType
  fill?: boolean
  onSelect?: (value: string) => void
}

export const Select: FC<SelectProps> = ({
  placeholder,
  options,
  onSelect,
  size,
  fill = true,
  value,
  ...props
}) => {
  const [activeOption, setActiveOption] = useState<SelectOptionType>()

  const onValueChange = useCallback(
    (changedValue: string): void => {
      if (onSelect) {
        onSelect(changedValue)
      }
      setActiveOption(options.find((option) => option.value === changedValue))
    },
    [onSelect, setActiveOption, options]
  )

  useEffect(() => {
    if (value && options) {
      setActiveOption(options.find((option) => option.value === value))
    }
  }, [value, options, setActiveOption])

  return (
    <Root value={value} onValueChange={onValueChange} {...props}>
      <SelectTrigger size={size} fill={fill}>
        <span className={selectItemTextStyles}>
          {activeOption?.label || activeOption?.value || (
            <SelectPlaceholder>{placeholder}</SelectPlaceholder>
          )}
        </span>
        <SelectIcon>
          <ArrowDownIcon width={20} height={20} color='black' />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent position='popper' sideOffset={5}>
        <Viewport>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option?.label || option.value}
            </SelectItem>
          ))}
        </Viewport>
      </SelectContent>
    </Root>
  )
}
