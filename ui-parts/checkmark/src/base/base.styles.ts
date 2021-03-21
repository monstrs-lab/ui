import { styleFn } from 'styled-system'

export const createCheckmarkBaseStyles: styleFn = () => () => ({
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
  transition: 'transform 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
})
