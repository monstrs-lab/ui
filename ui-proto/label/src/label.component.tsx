import type { LabelProps } from '@radix-ui/react-label'
import type { SpeceProps } from 'styled-system'

import styled              from '@emotion/styled'
import { Root }            from '@radix-ui/react-label'

import { space }           from 'styled-system'

export const Label = styled(Root)<SpeceProps & LabelProps>(space, {
  fontFamily: '"Noto Sans"',
  color: 'black',
  userSelect: 'none',
})
