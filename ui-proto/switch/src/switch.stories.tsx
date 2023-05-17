/* eslint-disable jsx-a11y/label-has-associated-control */

import React                         from 'react'

import { Row }                       from '@ui-proto/layout'
import { Layout }                    from '@ui-proto/layout'
import { Text }                      from '@ui-proto/text'

import { Switch as SwitchComponent } from './switch.component'

export default {
  title: 'Components/Switch',
}

export const Switch = () => (
  <Row alignItems='center'>
    <Layout>
      <label htmlFor='s1'>
        <Text
          fontFamily='"Noto Sans"'
          fontWeight={400}
          fontSize={12}
          color='black'
          lineHeight='normal'
          display='inline-flex'
        >
          Airplane mode
        </Text>
      </label>
    </Layout>
    <Layout paddingLeft={16}>
      <SwitchComponent defaultChecked id='s1' />
    </Layout>
  </Row>
)
