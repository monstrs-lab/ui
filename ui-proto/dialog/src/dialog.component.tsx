import type { DialogProps as BaseDialogProps } from '@radix-ui/react-dialog'
import type { ReactElement }                   from 'react'
import type { ReactNode }                      from 'react'

import type { DialogContentProps }             from './dialog-content/index.js'

import { Root }                                from '@radix-ui/react-dialog'
import { Portal }                              from '@radix-ui/react-dialog'
import { Trigger }                             from '@radix-ui/react-dialog'
import { useState }                            from 'react'
import { useEffect }                           from 'react'
import React                                   from 'react'

import { DialogContent }                       from './dialog-content/index.js'
import { DialogOverlay }                       from './dialog-overlay/index.js'

export interface DialogProps extends BaseDialogProps {
  content: ReactNode
  size: DialogContentProps['size']
}

export const Dialog = ({
  children,
  open,
  content,
  size,
  onOpenChange,
  ...props
}: DialogProps): ReactElement => {
  const [opened, setOpened] = useState<boolean | undefined>(false)

  useEffect(() => {
    setOpened(open)
  }, [setOpened, open])

  return (
    <Root open={opened} onOpenChange={onOpenChange || setOpened} {...props}>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <DialogOverlay>
          <DialogContent size={size} onOpenChange={onOpenChange || setOpened}>
            {content}
          </DialogContent>
        </DialogOverlay>
      </Portal>
    </Root>
  )
}
