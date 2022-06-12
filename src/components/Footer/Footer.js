import styled from '@emotion/styled'
import { Divider } from '@material-ui/core'
import React from 'react'
import { MainLink } from '../Links'

const WrapperStyled = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
  & > div {
    margin-top: 10px;
  }
  ${MainLink} {
    font-size: 16px;
  }
`
const LeftFlex = styled.div`
  display: flex;
  justify-content: flex-start;
`
const RightFlex = styled.div`
  display: flex;
  justify-content: flex-end;
`
const StyledDivider = styled(Divider)`
  background-color: black;
  margin:0 10px;
`

export const Footer = () => (
  <WrapperStyled>
    <LeftFlex>
      <MainLink to="/">Vkontakte</MainLink>
      <StyledDivider orientation="vertical" variant="middle" flexItem />
      <MainLink to="/">What's up</MainLink>
      <StyledDivider orientation="vertical" variant="middle" flexItem />
      <MainLink to="/">Telegram</MainLink>
    </LeftFlex>
    <RightFlex>
    <MainLink to="/">Политика конфиденциальности</MainLink>
    </RightFlex>
  </WrapperStyled>
)
