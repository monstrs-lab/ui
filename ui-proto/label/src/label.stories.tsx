/* eslint-disable react/prop-types */

import type { JSX }                from 'react'

import React                       from 'react'

import { Input }                   from '@ui-proto/input'
import { Row }                     from '@ui-proto/layout'
import { Layout }                  from '@ui-proto/layout'

import { Label as LabelComponent } from './label.component'

export default {
  title: 'Components/Label',
}

export const Label = ({ type }): JSX.Element => (
  <Row alignItems='center'>
    <Layout marginRight={16}>
      <LabelComponent htmlFor='id'>First Name</LabelComponent>
    </Layout>
    <Layout width={200}>
      <Input id='id' />
    </Layout>
  </Row>
)
