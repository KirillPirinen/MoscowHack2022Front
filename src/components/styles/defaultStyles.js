import { css } from '@emotion/react'

export const defaultFont = (size = 14) => css`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: ${size}px;
  line-height: 16px;
`
