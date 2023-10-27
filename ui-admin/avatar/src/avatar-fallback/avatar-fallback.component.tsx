import type { AvatarFallbackProps as AvatarFallbackRadixProps } from '@radix-ui/react-avatar'
import type { ReactElement }                                    from 'react'

import { Fallback }                                             from '@radix-ui/react-avatar'
import React                                                    from 'react'

import { TextTransform }                                        from '@ui-primitives/text-transform'

import { avatarFallbackStyles }                                 from './avatar-fallback.styles.css.js'

export interface AvatarFallbackProps extends AvatarFallbackRadixProps {
  children?: string
}

export const AvatarFallback = ({ children, ...props }: AvatarFallbackProps): ReactElement => (
  <Fallback className={avatarFallbackStyles} {...props}>
    <TextTransform firstLetter>{children}</TextTransform>
  </Fallback>
)
