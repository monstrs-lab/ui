/* eslint-disable  @next/next/no-img-element */
/* eslint-disable react/jsx-no-leaked-render */

import type { Meta }                  from '@storybook/react'
import type { StoryObj }              from '@storybook/react'
import type { BottomNavigationProps } from '@ui-admin/bottom-navigation'
import type { SidebarProps }          from '@ui-admin/sidebar'
import type { TableProps }            from '@ui-admin/table'
import type { ReactElement }          from 'react'

import { MixerHorizontalIcon }        from '@radix-ui/react-icons'
import { PersonIcon }                 from '@radix-ui/react-icons'
import { ReaderIcon }                 from '@radix-ui/react-icons'
import { RowsIcon }                   from '@radix-ui/react-icons'
import { PlusIcon }                   from '@radix-ui/react-icons'
import { GearIcon }                   from '@radix-ui/react-icons'
import { ChevronRightIcon }           from '@radix-ui/react-icons'
import { faker }                      from '@faker-js/faker'
import React                          from 'react'

import { Avatar }                     from '@ui-admin/avatar'
import { BottomNavigation }           from '@ui-admin/bottom-navigation'
import { IconButton }                 from '@ui-admin/button'
import { Column }                     from '@ui-admin/layout'
import { Row }                        from '@ui-admin/layout'
import { Layout }                     from '@ui-admin/layout'
import { Navigation }                 from '@ui-admin/navigation'
import { Sidebar }                    from '@ui-admin/sidebar'
import { Table }                      from '@ui-admin/table'
import { Text }                       from '@ui-admin/text'

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

const ListPage = ({
  items,
  data,
  columns,
}: BottomNavigationProps & SidebarProps & TableProps<unknown>): ReactElement => (
  <Row height='100%'>
    <Layout display={['none', 'flex', 'flex']}>
      <Sidebar items={items} />
    </Layout>
    <Layout flexGrow={1}>
      <Column height='100%'>
        <Layout>
          <Navigation
            title='Пользователи'
            left={
              <IconButton size='large'>
                <PlusIcon color='white' height={18} width={18} />
              </IconButton>
            }
            right={
              <IconButton size='large'>
                <GearIcon color='white' height={18} width={18} />
              </IconButton>
            }
          />
        </Layout>
        <Layout flexGrow={1} overflow='hidden'>
          <Table data={data} columns={columns} />
        </Layout>
        <Layout display={['flex', 'none', 'none']}>
          <BottomNavigation items={items} />
        </Layout>
      </Column>
    </Layout>
  </Row>
)

const meta: Meta<BottomNavigationProps & SidebarProps & TableProps<unknown>> = {
  title: 'List page',

  parameters: {
    layout: 'fullscreen',
  },

  component: ListPage,
}

export const Base: StoryObj<BottomNavigationProps & SidebarProps & TableProps<Person>> = {
  args: {
    items: [
      {
        icon: MixerHorizontalIcon,
      },
      {
        icon: PersonIcon,
      },
      {
        icon: ReaderIcon,
      },
      {
        icon: RowsIcon,
      },
    ],
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
              <Text fontSize='normal'>{`${props.row.original.firstName} ${props.row.original.lastName}`}</Text>
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
          <IconButton size='large'>
            <ChevronRightIcon color='white' width={16} height={16} />
          </IconButton>
        ),
      },
    ],
  },
}

export default meta
