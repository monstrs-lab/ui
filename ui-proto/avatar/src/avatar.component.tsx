import type { FC }        from 'react'

import React              from 'react'

import { TextTransform }  from '@ui-primitives/text-transform'

import { AvatarFallback } from './avatar-fallback.component'
import { AvatarImage }    from './avatar-image.component'
import { AvatarRoot }     from './avatar-root.component'
import { AvatarProps }    from './avatar.interfaces'

export const Avatar: FC<AvatarProps> = ({ size, image, fallback }) => (
  <AvatarRoot size={size}>
    <AvatarImage src={image} />
    <AvatarFallback size={size}>
      <TextTransform firstLetter upperCase>
        {fallback}
      </TextTransform>
    </AvatarFallback>
  </AvatarRoot>
)
