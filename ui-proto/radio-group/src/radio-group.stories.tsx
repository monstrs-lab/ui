/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/hook-use-state */

import type { JSX }                          from 'react'

import { useState }                          from 'react'
import React                                 from 'react'

import { Column }                            from '@ui-proto/layout'
import { Layout }                            from '@ui-proto/layout'
import { Text }                              from '@ui-proto/text'

import { RadioGroupRadio }                   from './radio-group-radio.component'
import { RadioGroup as RadioGroupComponent } from './radio-group.component'

export default {
  title: 'Components/RadioGroup',
}

export const RadioGroup = (): JSX.Element => {
  const [value, onChange] = useState('default')

  return (
    <RadioGroupComponent value={value} onChange={onChange}>
      <Column>
        <Layout marginTop={10} marginBottom={10}>
          <RadioGroupRadio value='default' id='r1' />
          <label htmlFor='r1'>
            <Text
              fontFamily='"Noto Sans"'
              fontWeight={400}
              fontSize={18}
              color='black'
              lineHeight='normal'
              display='inline-flex'
              marginLeft={12}
            >
              Default
            </Text>
          </label>
        </Layout>
        <Layout marginTop={10} marginBottom={10}>
          <RadioGroupRadio value='comfortable' />
          <label htmlFor='r1'>
            <Text
              fontFamily='"Noto Sans"'
              fontWeight={400}
              fontSize={18}
              color='black'
              lineHeight='normal'
              display='inline-flex'
              marginLeft={12}
            >
              Comfortable
            </Text>
          </label>
        </Layout>
        <Layout marginTop={10} marginBottom={10}>
          <RadioGroupRadio value='compact' />
          <label htmlFor='r1'>
            <Text
              fontFamily='"Noto Sans"'
              fontWeight={400}
              fontSize={18}
              color='black'
              lineHeight='normal'
              display='inline-flex'
              marginLeft={12}
            >
              Compact
            </Text>
          </label>
        </Layout>
      </Column>
    </RadioGroupComponent>
  )
}
