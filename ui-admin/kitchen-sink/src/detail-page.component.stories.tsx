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
import { PlayIcon }                   from '@radix-ui/react-icons'
import { ArrowLeftIcon }              from '@radix-ui/react-icons'
import React                          from 'react'

import { BottomNavigation }           from '@ui-admin/bottom-navigation'
import { IconButton }                 from '@ui-admin/button'
import { Button }                     from '@ui-admin/button'
import { Input }                      from '@ui-admin/input'
import { Column }                     from '@ui-admin/layout'
import { Row }                        from '@ui-admin/layout'
import { Layout }                     from '@ui-admin/layout'
import { Navigation }                 from '@ui-admin/navigation'
import { NavigationActions }          from '@ui-admin/navigation'
import { NavigationTitle }            from '@ui-admin/navigation'
import { Sidebar }                    from '@ui-admin/sidebar'
import { colors }                     from '@ui-admin/theme'

interface Person {
  firstName: string
  lastName: string
  email: string
  avatar?: string
}

const DetailPage = ({
  items,
}: BottomNavigationProps & SidebarProps & TableProps<unknown>): ReactElement => (
  <Row height='100%'>
    <Layout display={['none', 'flex', 'flex']}>
      <Sidebar items={items} />
    </Layout>
    <Layout flexGrow={1}>
      <Column height='100%'>
        <Layout>
          <Navigation>
            <NavigationActions mr='1x'>
              <IconButton size='large'>
                <ArrowLeftIcon color='white' height={18} width={18} />
              </IconButton>
            </NavigationActions>
            <NavigationTitle>Пользователь</NavigationTitle>
            <NavigationActions display={['flex', 'none', 'none']}>
              <IconButton size='large'>
                <PlayIcon color='white' height={18} width={18} />
              </IconButton>
            </NavigationActions>
            <NavigationActions display={['none', 'flex', 'flex']}>
              <Button>
                <PlayIcon color='white' height={18} width={18} />
                Сохранить
              </Button>
            </NavigationActions>
          </Navigation>
        </Layout>
        <Layout flexGrow={1} overflow='auto'>
          <Row>
            <Layout flexBasis={['2x', '3x', '3x']} />
            <Layout flexGrow={1}>
              <Column>
                <Layout flexBasis={['3x', '4x', '4x']} />
                <Layout>
                  <Input label='Имя' placeholder='Введите имя' />
                </Layout>
                <Layout flexBasis={['3x', '4x', '4x']} />
                <Layout>
                  <Input label='Фамилия' placeholder='Введите фамилию' />
                </Layout>
              </Column>
            </Layout>
            <Layout flexBasis={['2x', '3x', '3x']} />
          </Row>
        </Layout>
        <Layout display={['flex', 'none', 'none']}>
          <BottomNavigation items={items} />
        </Layout>
      </Column>
    </Layout>
  </Row>
)

const meta: Meta<BottomNavigationProps & SidebarProps & TableProps<unknown>> = {
  title: 'KitchenSink/Detail page',

  parameters: {
    layout: 'fullscreen',

    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: colors.black,
        },
      ],
    },
  },

  component: DetailPage,
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
  },
}

export default meta
