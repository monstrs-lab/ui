import type { TextProps }   from './text.interfaces'
import type { FC }          from 'react'

import { assignInlineVars } from '@vanilla-extract/dynamic'

import React                from 'react'

import { text }             from './text.css'
import { vars }             from './text.css'

export const Text: FC<TextProps> = ({
  children,
  textTransform,
  textOverflow,
  wordBreak,
  cursor,
}) => (
  <span
    className={text}
    style={assignInlineVars({
      [vars.textTransform]: textTransform!,
      [vars.textOverflow]: textOverflow!,
      [vars.wordBreak]: wordBreak!,
      [vars.cursor]: cursor!,
    })}
  >
    {children}
  </span>
)
