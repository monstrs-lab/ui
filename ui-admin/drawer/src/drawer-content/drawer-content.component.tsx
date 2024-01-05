import type { DialogContentProps }  from '@radix-ui/react-dialog'
import type { PanInfo }             from 'framer-motion'

import type { DrawerDirectionType } from '../drawer.component.js'

import { Content }                  from '@radix-ui/react-dialog'
import { motion }                   from 'framer-motion'
import { forwardRef }               from 'react'
import { useCallback }              from 'react'
import React                        from 'react'

import { drawerContentStyles }      from './drawer-content.styles.css.js'

export interface DrawerContentProps extends DialogContentProps {
  onOpenChange: (value: boolean) => void
  direction: DrawerDirectionType
}

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>((
  { children, onOpenChange, direction, ...props },
  ref
) => {
  const onDragEnd = useCallback(
    (_: MouseEvent, info: PanInfo) => {
      if (
        (direction === 'left' && info.offset.x < -100) ||
        (direction === 'right' && info.offset.x > 100)
      ) {
        onOpenChange(false)
      }
    },
    [onOpenChange, direction]
  )

  return (
    <Content ref={ref} asChild className={drawerContentStyles({ direction })} {...props}>
      <motion.div
        dragDirectionLock
        dragSnapToOrigin
        custom={direction}
        drag='x'
        dragElastic={0}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}
        initial='initial'
        animate='animate'
        exit='exit'
        dragConstraints={
          (direction === 'left' && { right: 0, left: -375 }) || { left: 0, right: 375 }
        }
        variants={{
          initial: (direct: DrawerDirectionType) => ({
            opacity: 0,
            x: direct === 'left' ? -200 : '100%',
          }),
          animate: {
            opacity: 1,
            x: 0,
          },
          exit: (direct: DrawerDirectionType) => ({
            opacity: 0,
            x: direct === 'left' ? -200 : '100%',
          }),
        }}
        whileDrag={{
          cursor: 'grabbing',
        }}
        transition={{
          ease: 'easeOut',
        }}
        onDragEnd={onDragEnd}
      >
        {children}
      </motion.div>
    </Content>
  )
})
