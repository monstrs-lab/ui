import React             from 'react'
import { render }        from '@testing-library/react'

import { TextTransform } from './text-transform.component'

describe('TextTransform', () => {
  it('uppercase', () => {
    const { getByText } = render(<TextTransform uppercase>uppercase</TextTransform>)

    expect(getByText('UPPERCASE')).toBeDefined()
  })

  it('lowercase', () => {
    const { getByText } = render(<TextTransform lowercase>LOWERCASE</TextTransform>)

    expect(getByText('lowercase')).toBeDefined()
  })

  it('firstletter', () => {
    const { getByText } = render(<TextTransform firstletter>word</TextTransform>)

    expect(getByText('w')).toBeDefined()
  })

  it('lastletter', () => {
    const { getByText } = render(<TextTransform lastletter>word</TextTransform>)

    expect(getByText('d')).toBeDefined()
  })

  it('replace', () => {
    const { getByText } = render(<TextTransform replace={['word', 'replaced']}>word</TextTransform>)

    expect(getByText('replaced')).toBeDefined()
  })

  it('substr', () => {
    const { getByText } = render(<TextTransform substr={[0, 1]}>word</TextTransform>)

    expect(getByText('w')).toBeDefined()
  })
})
