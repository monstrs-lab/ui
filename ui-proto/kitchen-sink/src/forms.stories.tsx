import React               from 'react'

import { Button }          from '@ui-proto/button'
import { Checkbox }        from '@ui-proto/checkbox'
import { Input }           from '@ui-proto/input'
import { Label }           from '@ui-proto/label'
import { Column }          from '@ui-proto/layout'
import { Row }             from '@ui-proto/layout'
import { Layout }          from '@ui-proto/layout'
import { RadioGroup }      from '@ui-proto/radio-group'
import { RadioGroupRadio } from '@ui-proto/radio-group'
import { Select }          from '@ui-proto/select'
import { SelectItem }      from '@ui-proto/select'
import { SelectGroup }     from '@ui-proto/select'
import { SelectLabel }     from '@ui-proto/select'
import { SelectSeparator } from '@ui-proto/select'
import { Text }            from '@ui-proto/text'

export default {
  title: 'KitchenSink/Forms',
}

export const Forms = () => (
  <Column width={400}>
    <Layout mb={30} justifyContent='center'>
      <Text fontSize='medium'>Create New Account</Text>
    </Layout>
    <Layout>
      <Row>
        <Layout flexBasis='50%'>
          <Column>
            <Layout mb='8px'>
              <Label htmlFor='firstName'>First Name</Label>
            </Layout>
            <Layout>
              <Input id='firstName' placeholder='Enter your name' />
            </Layout>
          </Column>
        </Layout>
        <Layout flexBasis={24} />
        <Layout flexBasis='50%'>
          <Column>
            <Layout mb='8px'>
              <Label htmlFor='lastName'>Last Name</Label>
            </Layout>
            <Layout>
              <Input id='lastName' placeholder='Enter your last name' />
            </Layout>
          </Column>
        </Layout>
      </Row>
    </Layout>
    <Layout flexBasis={16} />
    <Layout>
      <Column>
        <Layout mb='8px'>
          <Label htmlFor='email'>Email</Label>
        </Layout>
        <Layout>
          <Input id='email' placeholder='Enter your Email address' />
        </Layout>
      </Column>
    </Layout>
    <Layout flexBasis={16} />
    <Layout>
      <Column>
        <Layout mb='8px'>
          <Label>Industry</Label>
        </Layout>
        <Layout>
          <Select placeholder='Enter your Industry'>
            <SelectGroup>
              <SelectLabel>Finance and Insurance</SelectLabel>
              <SelectItem value='cb'>Commercial Banking </SelectItem>
              <SelectItem value='cci'>Credit Card Issuing</SelectItem>
              <SelectItem value='cu'>Credit Unions </SelectItem>
              <SelectItem value='ib'>Industrial Banks</SelectItem>
              <SelectItem value='lb'>Loan Brokers</SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Construction</SelectLabel>
              <SelectItem value='c'>Carpenters </SelectItem>
              <SelectItem value='cc'>Concrete Contractors</SelectItem>
              <SelectItem value='dw'>Demolition & Wrecking </SelectItem>
              <SelectItem value='e'>Electricians </SelectItem>
              <SelectItem value='m'>Masonry</SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Information</SelectLabel>
              <SelectItem value='cn'>Cable Networks </SelectItem>
              <SelectItem value='i'>Information</SelectItem>
            </SelectGroup>
          </Select>
        </Layout>
      </Column>
    </Layout>
    <Layout flexBasis={16} />
    <Layout>
      <Column>
        <Layout mb='8px'>
          <Label>Sex</Label>
        </Layout>
        <Layout>
          <RadioGroup defaultValue='male'>
            <Row>
              <Layout mr='8px'>
                <RadioGroupRadio value='male' id='male' />
              </Layout>
              <Layout mr='16px'>
                <Label htmlFor='male'>Male</Label>
              </Layout>
              <Layout mr='8px'>
                <RadioGroupRadio value='female' id='female' />
              </Layout>
              <Layout>
                <Label htmlFor='female'>Female</Label>
              </Layout>
            </Row>
          </RadioGroup>
        </Layout>
      </Column>
    </Layout>
    <Layout flexBasis={16} />
    <Layout>
      <Column>
        <Layout mb='8px'>
          <Label htmlFor='password'>Password</Label>
        </Layout>
        <Layout>
          <Input id='password' placeholder='Enter password' />
        </Layout>
      </Column>
    </Layout>
    <Layout flexBasis={30} />
    <Layout>
      <Row>
        <Layout flexGrow={1}>
          <Row alignItems='center'>
            <Layout mr='12px'>
              <Checkbox id='privacy' />
            </Layout>
            <Layout>
              <Label htmlFor='privacy'>
                <Text>I Agree with all Terms and Conditions</Text>
              </Label>
            </Layout>
          </Row>
        </Layout>
        <Layout>
          <Button>Create</Button>
        </Layout>
      </Row>
    </Layout>
  </Column>
)
