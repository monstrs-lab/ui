import React                         from 'react'

import { Slider as SliderComponent } from './slider.component'

export default {
  title: 'Components/Slider',
}

export const Slider = () => <SliderComponent defaultValue={[50]} max={100} step={1} />
