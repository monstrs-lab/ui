import { createVar } from '@vanilla-extract/css'
import { style }     from '@vanilla-extract/css'

const width = createVar()
const widthTablet = createVar()
const widthPhone = createVar()

const height = createVar()
const heightTablet = createVar()
const heightPhone = createVar()

const minWidth = createVar()
const minWidthTablet = createVar()
const minWidthPhone = createVar()

const minHeight = createVar()
const minHeightTablet = createVar()
const minHeightPhone = createVar()

const maxWidth = createVar()
const maxWidthTablet = createVar()
const maxWidthPhone = createVar()

const maxHeight = createVar()
const maxHeightTablet = createVar()
const maxHeightPhone = createVar()

const display = createVar()
const displayTablet = createVar()
const displayPhone = createVar()

const verticalAlign = createVar()
const overflowX = createVar()
const overflowY = createVar()
const overflow = createVar()

export const layout = style({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  display,
  verticalAlign,
  overflowX,
  overflowY,
  overflow,

  '@media': {
    'screen and (min-width: 52em)': {
      width: widthTablet,
      height: heightTablet,
      minWidth: minWidthTablet,
      minHeight: minHeightTablet,
      maxWidth: maxWidthTablet,
      maxHeight: maxHeightTablet,
      display: displayTablet,
    },
    'screen and (min-width: 40em)': {
      width: widthPhone,
      height: heightPhone,
      minWidth: minWidthPhone,
      minHeight: minHeightPhone,
      maxWidth: maxWidthPhone,
      maxHeight: maxHeightPhone,
      display: displayPhone,
    },
  },
})

export const vars = {
  width,
  widthTablet,
  widthPhone,
  height,
  heightTablet,
  heightPhone,
  minWidth,
  minWidthTablet,
  minWidthPhone,
  minHeight,
  minHeightTablet,
  minHeightPhone,
  maxWidth,
  maxWidthTablet,
  maxWidthPhone,
  maxHeight,
  maxHeightTablet,
  maxHeightPhone,
  display,
  displayTablet,
  displayPhone,
  verticalAlign,
  overflowX,
  overflowY,
  overflow,
}
