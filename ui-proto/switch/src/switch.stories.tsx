import React                         from 'react'

import { Row }                       from '@ui-proto/layout'
import { Layout }                    from '@ui-proto/layout'
import { Text }                      from '@ui-proto/text'

import { Switch as SwitchComponent } from './switch.component'

const Label = Text.withComponent('label')

Label.defaultProps = {
  fontFamily: 'primary',
  fontWeight: 'normal',
  fontSize: 'normal',
  color: 'text.primary',
  lineHeight: 'normal',
  display: 'inline-flex',
}

export default {
  title: 'Components/Switch',
}

export const Switch = () => (
  <Row alignItems='center'>
    <Layout>
      <Label htmlFor='s1'>Airplane mode</Label>
    </Layout>
    <Layout pl={16}>
      <SwitchComponent defaultChecked id='s1' />
    </Layout>
  </Row>
)
