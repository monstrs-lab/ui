import type { AttachmentsProps }        from '@ui-primitives/input'
import type { ReactElement }            from 'react'

import React                            from 'react'

import { AttachmentsPrefix }            from '@ui-primitives/input'
import { AttachmentsSuffix }            from '@ui-primitives/input'

import { inputAttachmentsPrefixStyles } from './input-attachments.styles.css.js'
import { inputAttachmentsSuffixStyles } from './input-attachments.styles.css.js'

export const InputAttachmentsPrefix = (props: AttachmentsProps): ReactElement => (
  <AttachmentsPrefix className={inputAttachmentsPrefixStyles} {...props} />
)

export const InputAttachmentsSuffix = (props: AttachmentsProps): ReactElement => (
  <AttachmentsSuffix className={inputAttachmentsSuffixStyles} {...props} />
)
