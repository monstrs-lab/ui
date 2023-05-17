import type { ColorProps }                    from '@css-primitives/color'
import type { LayoutProps as CssLayoutProps } from '@css-primitives/layout'
import type { SpaceProps }                    from '@css-primitives/space'
import type { TypographyProps }               from '@css-primitives/typography'
import type { Properties }                    from 'csstype'
import type { ReactNode }                     from 'react'

export interface TextProps extends CssLayoutProps, SpaceProps, TypographyProps, ColorProps {
  children: ReactNode
  wordBreak?: Properties['wordBreak']
  whiteSpace?: Properties['whiteSpace']
  textTransform?: Properties['textTransform']
  textOverflow?: Properties['textOverflow']
  cursor?: Properties['cursor']
}
