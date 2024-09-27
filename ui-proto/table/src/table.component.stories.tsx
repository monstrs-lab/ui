import type { Meta }       from '@storybook/react'
import type { StoryObj }   from '@storybook/react'

import type { TableProps } from './table.component.jsx'

import { faker }           from '@faker-js/faker'
import { useArgs }         from '@storybook/preview-api'
import React               from 'react'

import { Column }          from '@ui-proto/layout'
import { Layout }          from '@ui-proto/layout'
import { Text }            from '@ui-proto/text'

import { Table }           from './table.component.jsx'

interface Person {
  firstName: string
  lastName: string
  email: string
  balance: number
}

const generate = (length: number = 20): Array<Person> =>
  Array.from({ length }).map(() => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    balance: faker.number.int({ min: 0, max: 1000 }),
  }))

const meta: Meta<TableProps<unknown>> = {
  title: 'Table',

  parameters: {
    layout: 'fullscreen',
  },

  component: Table,
}

export const Base: StoryObj<TableProps<Person>> = {
  args: {
    data: generate(),
    columns: [
      {
        header: 'Пользователь',
        cell: (props) => (
          <Column>
            <Layout mb='1x'>
              <Text>{`${props.row.original.firstName} ${props.row.original.lastName}`}</Text>
            </Layout>
            <Layout>
              <Text color='black' fontSize='extra'>
                {props.row.original.email}
              </Text>
            </Layout>
          </Column>
        ),
      },
      {
        header: 'Баланс',
        cell: (props) => (
          <Column>
            <Layout>
              <Text color='black' fontSize='extra'>
                {props.row.original.balance}
              </Text>
            </Layout>
          </Column>
        ),
      },
    ],
  },
  render: function Render(args) {
    const [{ columns }] = useArgs()

    return (
      <div style={{ width: '100%', padding: 24, boxSizing: 'border-box' }}>
        <Table {...args} columns={columns} />
      </div>
    )
  },
}

export default meta
