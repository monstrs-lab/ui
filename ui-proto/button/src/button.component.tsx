import styled                         from '@emotion/styled'

import { Button as PrimitivesButton } from '@ui-primitives/button'

export const Button = styled(PrimitivesButton)({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  wordBreak: 'break-word',
  cursor: 'pointer',
  outline: 'none',
  padding: 0,
  border: '1px solid transparent',
  height: 40,
  fontSize: 12,
  fontWeight: 600,
  fontFamily: 'Noto Sans',
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 6,
  backgroundColor: 'black',
  borderColor: 'black',
  color: 'white',
  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
  '&:focus': { borderColor: '#1EA7FD' },
})
