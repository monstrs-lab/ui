import React                          from 'react'

import { InlineImagePlaceholder }     from './inline-image'
import { BackgroundImagePlaceholder } from './background-image'
import { LogoPlaceholder }            from './logo'

export default {
  title: 'Components/Placeholder',
}

const placeholderTypes = {
  'inline-image': InlineImagePlaceholder,
  'background-image': BackgroundImagePlaceholder,
  'horizontal-logo': (props) => <LogoPlaceholder {...props} />,
  'vertical-logo': (props) => <LogoPlaceholder type='vertical' {...props} />,
}

export const Placeholder = ({ type, ...props }) => {
  const PlaceholderComponent = placeholderTypes[type] || InlineImagePlaceholder

  return <PlaceholderComponent {...props} />
}

Placeholder.args = {
  type: 'inline-image',
}

Placeholder.argTypes = {
  type: {
    name: 'Тип',
    description: 'Тип плейсхолдера',
    control: {
      type: 'radio',
      options: ['inline-image', 'background-image', 'horizontal-logo', 'vertical-logo'],
    },
    table: {
      category: 'Варианты',
    },
  },
}
