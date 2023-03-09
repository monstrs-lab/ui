import type { FC } from 'react'

import styled      from '@emotion/styled'

export interface DividerProps {
  divider?: number
}

export const Divider: FC<DividerProps> = styled.span<DividerProps>(({ divider = 12 }) => ({
  marginLeft: divider,
  display: 'flex',
}))
