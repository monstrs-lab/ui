import type { FC }                 from 'react'
import type { ReactElement }       from 'react'

import type { TextTransformProps } from './text-transform.interfaces'

export const TextTransform: FC<TextTransformProps> = ({ children, ...props }) => {
  try {
    const transformed = Object.keys(props).reduce((result: string, key) => {
      const args: TextTransformProps[keyof Omit<TextTransformProps, 'children'>] =
        props[key as keyof Omit<TextTransformProps, 'children'>]

      switch (key) {
        case 'upperCase':
          return result.toUpperCase()
        case 'lowerCase':
          return result.toLowerCase()
        case 'firstLetter':
          return result.substr(0, 1)
        case 'lastLetter':
          return result.substr(-1)
        case 'substr':
          return Array.isArray(args)
            ? result.substr((args as [number, number])[0], (args as [number, number])[1])
            : result.substr(args as number)
        case 'replace':
          return result.replace((args as [string, string])[0], (args as [string, string])[1])
        default:
          return result
      }
    }, children || '')

    return transformed as any as ReactElement
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      throw error
    }

    return children
  }
}
