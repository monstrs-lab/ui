/* eslint-disable react/jsx-no-leaked-render */
/* eslint-disable @next/next/no-img-element */

import type { Meta }        from '@storybook/react'
import type { StoryObj }    from '@storybook/react'

import type { TableProps }  from './table.component.jsx'

import { ChevronRightIcon } from '@radix-ui/react-icons'
import { faker }            from '@faker-js/faker'
import { useArgs }          from '@storybook/preview-api'
import React                from 'react'

import { Avatar }           from '@ui-admin/avatar'
import { IconButton }       from '@ui-admin/button'
import { Column }           from '@ui-admin/layout'
import { Layout }           from '@ui-admin/layout'
import { Text }             from '@ui-admin/text'

import { Table }            from './table.component.jsx'

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
    hideColumnsOnMobile: ['avatar', 'visit'],
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
              <Text>{`${props.row.original.firstName} ${props.row.original.lastName}`}</Text>
            </Layout>
            <Layout>
              <Text color='lightgray' fontSize='extra'>
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
          <IconButton size='large'>
            <ChevronRightIcon color='white' width={16} height={16} />
          </IconButton>
        ),
      },
    ],
  },
  render: function Render(args) {
    const [{ data, columns }, updateArgs] = useArgs()

    const onLoadMore = (): void => {
      updateArgs({
        data: [...data, ...generate()],
      })
    }

    return <Table {...args} columns={columns} onLoadMore={onLoadMore} />
  },
}

export default meta
