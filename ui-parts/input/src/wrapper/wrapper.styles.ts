import { styleFn } from 'styled-system'

export const createWrapperStyles: styleFn = () => () => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  width: '100%',
})
