import { useEffect }      from 'react'
import { useRef }         from 'react'
import { useState }       from 'react'

import { UseScaleResult } from './scalable-content.interfaces'

export const useScale = (): UseScaleResult => {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number>(1)
  const [mounted, setMounted] = useState<boolean>(false)

  const getOffset = (parent: HTMLElement, direction: 'x' | 'y') => {
    const style = getComputedStyle(parent, null)
    const borderWidth = Number(style.borderWidth.replace('px', ''))

    if (direction === 'x') {
      return (Number(style.paddingLeft.replace('px', '')) + borderWidth) * 2
    }
    return (Number(style.paddingTop.replace('px', '')) + borderWidth) * 2
  }

  useEffect(() => {
    if (ref?.current?.parentElement) {
      const parent = ref.current.parentElement
      const childrenWidth = ref.current.offsetWidth
      const childrenHeight = ref.current.offsetHeight
      const parentWidth = parent?.offsetWidth || 0
      const parentHeight = parent?.offsetHeight || 0

      if (parentWidth >= parentHeight) {
        const offset = getOffset(parent, 'x')
        setScale(parentWidth - offset < childrenWidth ? (parentWidth - offset) / childrenWidth : 1)
      } else {
        const offset = getOffset(parent, 'y')
        setScale(
          parentHeight - offset < childrenHeight ? (parentHeight - offset) / childrenHeight : 1
        )
      }

      setMounted(true)
    }
  }, [])

  return {
    ref,
    style: { transform: `scale(${scale})`, opacity: mounted ? 1 : 0 },
  }
}
