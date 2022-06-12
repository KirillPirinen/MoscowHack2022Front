import styled from '@emotion/styled'
import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

const ButtonStyled = styled(LoadingButton)`
  background-color: white;
  border-radius: 6px;
  margin-bottom: 24px;
  color: #3ABD98;
  padding: 14px 30px;
  text-transform:none;
  &:hover:enabled {
    background-color: #1D9270;
    color: white;
  }
`
export const ButtonWithoutBackGround = ({text, ...rest}) => (
    <ButtonStyled
        loadingIndicator={<CircularProgress color="white" size={18} />}
        {...rest}
    >
        {text}
    </ButtonStyled>
)
