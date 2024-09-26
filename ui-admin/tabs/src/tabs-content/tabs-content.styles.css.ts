import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const tabsContentStyles = recipe({
  base: style({
    height: '100%',
    width: '100%',
    flexGrow: 1,
    outline: 'none',
  }),
})
