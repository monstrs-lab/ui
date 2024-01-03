import type { Meta }         from '@storybook/react'
import type { StoryObj }     from '@storybook/react'
import type { ReactElement } from 'react'

import React                 from 'react'

import { colors }            from './colors.js'
import { fonts }             from './fonts.js'

const Color = ({ name, color }: { name: string; color: string }): ReactElement => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      width: 160,
      height: 200,
    }}
  >
    <div style={{ display: 'flex', width: 160, background: color, height: 160 }} />
    <div
      style={{
        display: 'flex',
        fontFamily: fonts.primary,
        color: colors.black,
        background: colors.white,
        width: 160,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {name}
    </div>
  </div>
)

const Colors = (): ReactElement => (
  <div style={{ width: '100%', margin: '24px 0' }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 24,
        padding: '0 24px',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {Object.keys(colors).map((color) => (
        <Color key={color} name={color} color={colors[color as keyof typeof colors]} />
      ))}
    </div>
  </div>
)

const meta: Meta<unknown> = {
  title: 'Токены/Цвета',

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

  component: Colors,
}

export const Base: StoryObj<unknown> = {}

export default meta
