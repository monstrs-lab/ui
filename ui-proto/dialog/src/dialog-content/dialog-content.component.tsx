import type { DialogContentProps as BaseDialogContentProps } from '@radix-ui/react-dialog'
import type { PanInfo }                                      from 'framer-motion'

import { Content }                                           from '@radix-ui/react-dialog'
import { motion }                                            from 'framer-motion'
import { forwardRef }                                        from 'react'
import { useCallback }                                       from 'react'
import React                                                 from 'react'

import { useWindowSize }                                     from '@ui-utils/use-window-size'

import { defaultMotionProps }                                from './dialog-content-variants.js'
import { dialogContentStyles }                               from './dialog-content.styles.css.js'

export interface DialogContentProps extends BaseDialogContentProps {
  size: 'large' | 'normal' | 'small'
  onOpenChange: (value: boolean) => void
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>((
  { children, size, onOpenChange, ...props },
  ref
) => {
  const { innerWidth } = useWindowSize()

  const onDragEnd = useCallback(
    (_: MouseEvent, info: PanInfo) => {
      if (info.offset.y > 50) {
        onOpenChange(false)
      }
    },
    [onOpenChange]
  )

  if (!innerWidth) return null

  return (
    <Content ref={ref} asChild className={dialogContentStyles({ size })} {...props}>
      <motion.div
        {...defaultMotionProps}
        initial='initial'
        animate='animate'
        exit='exit'
        onDragEnd={onDragEnd}
      >
        {children}
      </motion.div>
    </Content>
  )
})
