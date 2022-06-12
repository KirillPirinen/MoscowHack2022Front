import React from 'react'
import styled from '@emotion/styled'
import { BaseButton } from './BaseButton'
import { LoadingButton } from '@mui/lab'
import { CircularProgress } from '@material-ui/core'

const ButtonWrapperStyled = styled(BaseButton)`
  padding: 12px 48px;
  border: 1px solid #232323;
  border-radius: 30px;
  color: white;
  background: #232323;
  text-transform:none;
  &:hover {
    background-color: white;
    color: black;
  }
  & > div {
    color: white;
  }
`.withComponent(LoadingButton)

export const MainButton = ({ text, ...rest }) => (
    <ButtonWrapperStyled 
    loadingIndicator={<CircularProgress color="white" size={18} />}
    {...rest}
    >{text}</ButtonWrapperStyled>
)
