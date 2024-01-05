import type { DialogProps } from '@radix-ui/react-dialog'
import type { FC }          from 'react'
import type { ReactNode }   from 'react'

import { Root }             from '@radix-ui/react-dialog'
import { Portal }           from '@radix-ui/react-dialog'
import { Trigger }          from '@radix-ui/react-dialog'
import { useState }         from 'react'
import { useEffect }        from 'react'
import React                from 'react'

import { DrawerContent }    from './drawer-content/index.js'
import { DrawerOverlay }    from './drawer-overlay/index.js'

export type DrawerDirectionType = 'left' | 'right'

export interface DrawerProps extends DialogProps {
  content: ReactNode
  direction?: DrawerDirectionType
}

export const Drawer: FC<DrawerProps> = ({
  children,
  content,
  open,
  onOpenChange,
  direction = 'left',
  ...props
}) => {
  const [opened, setOpened] = useState<boolean | undefined>(false)

  useEffect(() => {
    setOpened(open)
  }, [setOpened, open])

  return (
    <Root open={opened} onOpenChange={onOpenChange || setOpened} {...props}>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <DrawerOverlay>
          <DrawerContent direction={direction} onOpenChange={onOpenChange || setOpened}>
            {content}
          </DrawerContent>
        </DrawerOverlay>
      </Portal>
    </Root>
  )
}
