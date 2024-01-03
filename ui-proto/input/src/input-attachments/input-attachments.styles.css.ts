import { style }       from '@vanilla-extract/css'

import { fontSizes }   from '@ui-proto/theme'
import { fontWeights } from '@ui-proto/theme'
import { fonts }       from '@ui-proto/theme'

const inputAttachmentsBaseStyles = style({
  fontFamily: fonts.primary,
  fontWeight: fontWeights.normal,
  fontSize: fontSizes.extra,
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
