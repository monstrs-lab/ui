import type { SliderProps } from '@radix-ui/react-slider'
import type { FC }          from 'react'

import React                from 'react'

import { SliderRange }      from './slider-range.component'
import { SliderRoot }       from './slider-root.component'
import { SliderThumb }      from './slider-thumb.component'
import { SliderTrack }      from './slider-track.component'

export const Slider: FC<SliderProps> = (props) => (
  <SliderRoot {...props}>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
)
