import styled from '@emotion/styled'
import React from 'react'
import { BaseButton } from './BaseButton'

const ButtonStyled = styled(BaseButton)(({ disabled }) => `
  background-color: ${disabled ? '#E5E5E5' : '#FFF'};
  border-radius: 6px;
  color: black;
  border: 1px solid #C9C9C9;
  padding: 12px 30px; 
  &:hover:enabled {
    background-color: #3ABD98;
    color: white;
  }
`)

export const TimeButton = ({text, ...rest}) => (
    <ButtonStyled {...rest}>{text}</ButtonStyled>
  )
