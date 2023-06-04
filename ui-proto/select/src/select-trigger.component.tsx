import type { SelectTriggerProps as TriggerProps } from '@radix-ui/react-select'

import { Trigger }                                 from '@radix-ui/react-select'
import styled                                      from '@emotion/styled'
import { switchProp }                              from 'styled-tools'
import { prop }                                    from 'styled-tools'

export type SelectTriggerAttachPosition = 'both' | 'left' | 'right'

export interface SelectTriggerProps extends TriggerProps {
  attach?: SelectTriggerAttachPosition
}

export const SelectTrigger = styled(Trigger)<SelectTriggerProps>(
  {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: 13,
    lineHeight: 1,
    height: 40,
    width: '100%',
    gap: 5,
    boxSizing: 'border-box',
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
    fontFamily: '"Noto Sans"',
    '&:hover': { backgroundColor: 'rgb(224, 224, 224)' },
    '&:focus': { boxShadow: `0 0 0 2px #1EA7FD` },

    '&[data-placeholder]': {
      color: 'rgb(117, 117, 117)',
    },
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
