import type { Properties } from 'csstype'
import type { ReactNode }  from 'react'

export interface TextProps {
  children: ReactNode
  wordBreak?: Properties['wordBreak']
  whiteSpace?: Properties['whiteSpace']
  textTransform?: Properties['textTransform']
  textOverflow?: Properties['textOverflow']
  cursor?: Properties['cursor']
}
