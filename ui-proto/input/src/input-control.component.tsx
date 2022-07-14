import type { ControlProps } from '@ui-primitives/input'

import styled                from '@emotion/styled'

import { switchProp }        from 'styled-tools'
import { prop }              from 'styled-tools'

import { Control }           from '@ui-primitives/input'

export type InputControlAttachPosition = 'both' | 'left' | 'right'

export interface InputControlProps extends ControlProps {
  attach?: InputControlAttachPosition
}

export const InputControl = styled(Control)<InputControlProps>(
  {
    boxSizing: 'border-box',
    boxShadow: 'none',
    outline: 'none',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'text',
    fontFamily: '"Noto Sans"',
    fontWeight: 400,
    height: 40,
    fontSize: 12,
    borderRadius: 6,
    fontColor: 'black',
    backgroundColor: 'white',
    border: '1px solid black',
    paddingLeft: 16,

    '&:focus': { boxShadow: `0 0 0 2px #1EA7FD` },
  },

  switchProp(prop('attach'), () => ({
    left: {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      position: 'relative',
      marginLeft: -1,
      width: 'calc(100% + 1px)',
      '&:focus': {
        zIndex: 2,
      },
      '&:hover': {
        zIndex: 1,
      },
    },
    right: {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      position: 'relative',
      '&:focus': {
        zIndex: 2,
      },
      '&:hover': {
        zIndex: 1,
      },
    },
    both: {
      borderRadius: 0,
      position: 'relative',
      marginLeft: -1,
      width: 'calc(100% + 1px)',
      '&:focus': {
        zIndex: 2,
      },
      '&:hover': {
        zIndex: 1,
      },
    },
  }))
)
