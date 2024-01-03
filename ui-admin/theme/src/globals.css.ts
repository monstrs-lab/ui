import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body', {
  margin: 0,
  overflowX: 'hidden',
  WebkitFontSmoothing: 'antialiased',
  WebkitOverflowScrolling: 'touch',
  backgroundColor: '#F8F8FB',
})

globalStyle('#__next', {
  height: '100%',
})

globalStyle('p', {
  margin: 0,
})

globalStyle('a', {
  textDecoration: 'none',
})
