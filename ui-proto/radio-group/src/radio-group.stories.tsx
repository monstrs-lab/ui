import React                                 from 'react'
import { useState }                          from 'react'

import { Column }                            from '@ui-proto/layout'
import { Layout }                            from '@ui-proto/layout'
import { Text }                              from '@ui-proto/text'

import { RadioGroupRadio }                   from './radio-group-radio.component'
import { RadioGroup as RadioGroupComponent } from './radio-group.component'

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
  title: 'Components/RadioGroup',
}

export const RadioGroup = () => {
  const [value, onChange] = useState('default')

  return (
    <RadioGroupComponent value={value} onChange={onChange}>
      <Column>
        <Layout my={10}>
          <RadioGroupRadio value='default' id='r1' />
          <Label fontSize='medium' ml={12} htmlFor='r1'>
            Default
          </Label>
        </Layout>
        <Layout my={10}>
          <RadioGroupRadio value='comfortable' />
          <Label fontSize='medium' ml={12} htmlFor='r1'>
            Comfortable
          </Label>
        </Layout>
        <Layout my={10}>
          <RadioGroupRadio value='compact' />
          <Label fontSize='medium' ml={12} htmlFor='r1'>
            Compact
          </Label>
        </Layout>
      </Column>
    </RadioGroupComponent>
  )
}
