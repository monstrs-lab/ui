import React      from 'react'
import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
    `}
  />
)
