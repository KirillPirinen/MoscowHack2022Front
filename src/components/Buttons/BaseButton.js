import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { defaultFont } from '../styles/defaultStyles'

export const BaseButton = styled.button(({ fullWidth }) => css`
  ${defaultFont()}
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  ${fullWidth && 'width:100%;'}
  &:disabled {
    cursor:auto;
  }
`)
