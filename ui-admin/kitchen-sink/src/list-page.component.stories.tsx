/* eslint-disable  @next/next/no-img-element */
/* eslint-disable react/jsx-no-leaked-render */

import type { Meta }         from '@storybook/react'
import type { StoryObj }     from '@storybook/react'
import type { TableProps }   from '@ui-admin/table'
import type { ReactElement } from 'react'

import { PlusIcon }          from '@radix-ui/react-icons'
import { GearIcon }          from '@radix-ui/react-icons'
import { ChevronRightIcon }  from '@radix-ui/react-icons'
import { faker }             from '@faker-js/faker'
import React                 from 'react'

import { Avatar }            from '@ui-admin/avatar'
import { Column }            from '@ui-admin/layout'
import { Layout }            from '@ui-admin/layout'
import { Navigation }        from '@ui-admin/navigation'
import { TableRowAction }    from '@ui-admin/table'
import { Table }             from '@ui-admin/table'
import { Text }              from '@ui-admin/text'

interface Person {
  firstName: string
  lastName: string
  email: string
  avatar?: string
}

const generate = (length: number = 20): Array<Person> =>
  Array.from({ length }).map(() => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    avatar: Math.round(Math.random() * 1 + 0) === 0 ? faker.image.avatar() : undefined,
  }))

const ListPage = ({ data, columns }: TableProps<unknown>): ReactElement => (
  <Column>
    <Layout>
      <Navigation
        title='Пользователи'
        left={<PlusIcon color='white' />}
        right={<GearIcon color='white' />}
      />
    </Layout>
    <Layout>
      <Table data={data} columns={columns} />
    </Layout>
  </Column>
)

const meta: Meta<TableProps<unknown>> = {
  title: 'List page',

  parameters: {
    layout: 'fullscreen',
  },

  component: ListPage,
}

export const Base: StoryObj<TableProps<Person>> = {
  args: {
    data: generate(),
    columns: [
      {
        id: 'avatar',
        header: 'Фото',
        size: 16,
        cell: (props) => (
          <Avatar title={`${props.row.original.firstName} ${props.row.original.lastName}`}>
            {props.row.original.avatar ? (
              <img
                src={props.row.original.avatar}
                alt={`${props.row.original.firstName} ${props.row.original.lastName}`}
              />
            ) : undefined}
          </Avatar>
        ),
      },
      {
        header: 'Пользователь',
        cell: (props) => (
          <Column>
            <Layout mb='1x'>
              <Text fontSize='extra'>{`${props.row.original.firstName} ${props.row.original.lastName}`}</Text>
            </Layout>
            <Layout>
              <Text color='gray1' fontSize='extra'>
                {props.row.original.email}
              </Text>
            </Layout>
          </Column>
        ),
      },
      {
        id: 'visit',
        header: '',
        size: 16,
        cell: () => (
          <TableRowAction>
            <ChevronRightIcon />
          </TableRowAction>
        ),
      },
    ],
  },
}

export default meta
