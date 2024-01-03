import type { FC }         from 'react'

import type { SpaceProps } from './space.interfaces'

import React               from 'react'

const Space: FC<SpaceProps> = ({ count = 1 }) => (
  <span style={{ display: 'inline-flex' }}>{'\u00A0'.repeat(count)}</span>
)

export { Space }
