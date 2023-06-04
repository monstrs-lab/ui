import type { FC }                   from 'react'

import type { LogoPlaceholderProps } from './logo-placeholder.interfaces'

import React                         from 'react'

import { Layout }                    from '@ui-proto/layout'
import { Text }                      from '@ui-proto/text'

import { ImagePlaceholder }          from '../image'

export const LogoPlaceholder: FC<LogoPlaceholderProps> = ({
  type = 'horizontal',
  children = 'Логотип',
  color = 'black',
  size = 32,
}) => (
  <Layout
    flexDirection={type === 'horizontal' ? 'row' : 'column'}
    display='inline-flex'
    alignItems='center'
  >
    <ImagePlaceholder color={color} size={size} />
    <Layout
      marginLeft={type === 'horizontal' ? size * 0.28 : 0}
      marginTop={type === 'vertical' ? size * 0.28 : 0}
      display='inline-flex'
    >
      <Text color={color} fontWeight={600} fontSize={size * 0.56}>
        {children}
      </Text>
    </Layout>
  </Layout>
)
