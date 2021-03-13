import { useEffect } from 'react'
import { useRef }    from 'react'
import { useState }  from 'react'
import { RefObject } from 'react'

export type StyleResult = {
  transform: string
  opacity: number
}

export interface UseResizeResult {
  node: RefObject<HTMLDivElement>
  style: StyleResult
}

export const useResize = (offset: number = 0): UseResizeResult => {
  const node = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number>(1)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    if (node?.current) {
      const childrenWidth = node?.current?.offsetWidth || 0
      const parentWidth = node?.current?.parentElement?.offsetWidth || 0

      setScale(
        parentWidth - (8 + offset) < childrenWidth
          ? (parentWidth - (8 + offset)) / childrenWidth
          : 1
      )
      setMounted(true)
    }
  }, [offset])

  return {
    node,
    style: { transform: `scale(${scale}) translateX(-50%)`, opacity: mounted ? 1 : 0 },
  }
}
