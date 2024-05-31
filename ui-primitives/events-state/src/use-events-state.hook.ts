import type { MutableRefObject } from 'react'

import type { EventsState }      from './events-state.interfaces'

import { useEffect }             from 'react'
import { useState }              from 'react'
import { useMemo }               from 'react'

import { fillOppositeEvents }    from './events-state.utils'
import { mergeState }            from './events-state.utils'

export const useEventsState = (
  ref: MutableRefObject<HTMLElement>,
  originalEvents: Array<string> = []
): EventsState => {
  const events = useMemo(() => fillOppositeEvents(originalEvents), [originalEvents])

  const [state, setState] = useState<EventsState>(() =>
    events.reduce(
      (result, event) => ({
        ...result,
        [event]: false,
      }),
      {}
    ))

  useEffect(() => {
    const node = ref?.current

    const callbacks = events.reduce(
      (result, event) => ({
        ...result,
        [event]: (): void => {
          setState((prev) => mergeState(prev, event))
        },
      }),
      {}
    )

    if (node) {
      Object.keys(callbacks).forEach((event) => {
        node.addEventListener(event, callbacks[event as keyof typeof callbacks])
      })
    }

    return (): void => {
      if (node) {
        Object.keys(callbacks).forEach((event) => {
          node.removeEventListener(event, callbacks[event as keyof typeof callbacks])
        })
      }
    }
  }, [ref, events])

  return state
}
