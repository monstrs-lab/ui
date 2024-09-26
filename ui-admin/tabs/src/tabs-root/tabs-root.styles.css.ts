import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const tabsRootStyles = recipe({
  base: style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  }),
})
