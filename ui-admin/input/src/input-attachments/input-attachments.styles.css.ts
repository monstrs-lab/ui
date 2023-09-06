import { style } from '@vanilla-extract/css'

const inputAttachmentsBaseStyles = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  zIndex: 3,
})

export const inputAttachmentsPrefixStyles = style([
  inputAttachmentsBaseStyles,
  {
    left: 0,
    paddingRight: 10,
    paddingLeft: 12,
  },
])

export const inputAttachmentsSuffixStyles = style([
  inputAttachmentsBaseStyles,
  {
    right: 0,
    paddingRight: 12,
    paddingLeft: 10,
  },
])
