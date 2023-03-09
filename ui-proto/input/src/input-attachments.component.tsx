import styled                from '@emotion/styled'

import { AttachmentsPrefix } from '@ui-primitives/input'
import { AttachmentsSuffix } from '@ui-primitives/input'

export const InputAttachmentsPrefix = styled(AttachmentsPrefix)({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  paddingRight: 10,
  paddingLeft: 12,
  fontFamily: '"Noto Sans"',
  fontWeight: 400,
  fontSize: 12,
  zIndex: 3,
})

export const InputAttachmentsSuffix = styled(AttachmentsSuffix)({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  paddingRight: 12,
  paddingLeft: 10,
  fontFamily: '"Noto Sans"',
  fontWeight: 400,
  fontSize: 12,
  zIndex: 3,
})
