import { useEffect }      from 'react'
import { useRef }         from 'react'
import { useState }       from 'react'

import { UseScaleResult } from './scalable-content.interfaces'

export const useScale = (offset: number = 0): UseScaleResult => {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number>(1)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    if (ref?.current) {
      const childrenWidth = ref.current.offsetWidth
      const childrenHeight = ref.current.offsetHeight
      const parentWidth = ref?.current?.parentElement?.offsetWidth || 0
      const parentHeight = ref?.current?.parentElement?.offsetHeight || 0

      const widthRation =
        parentWidth - offset < childrenWidth ? (parentWidth - offset) / childrenWidth : 1
      const heightRation =
        parentHeight - offset < childrenHeight ? (parentHeight - offset) / childrenHeight : 1

      setScale(widthRation <= heightRation ? widthRation : heightRation)
      setMounted(true)
    }
  }, [offset])

  return {
    ref,
    style: { transform: `scale(${scale})`, opacity: mounted ? 1 : 0 },
  }
}
