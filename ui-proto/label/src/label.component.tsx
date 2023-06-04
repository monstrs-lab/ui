/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

import type { LabelProps } from '@radix-ui/react-label'
import type { SpeceProps } from 'styled-system'

import { Root }            from '@radix-ui/react-label'
import styled              from '@emotion/styled'
import { space }           from 'styled-system'

export const Label = styled(Root)<LabelProps & SpeceProps>(space, {
  fontFamily: '"Noto Sans"',
  color: 'black',
  userSelect: 'none',
})
