import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const toastViewportStyles = recipe({
  base: style({
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    gap: '10px',
    width: 390,
    maxWidth: '100vw',
    margin: 0,
    listStyle: 'none',
    zIndex: 2000,
    outline: 'none',
  }),
})
