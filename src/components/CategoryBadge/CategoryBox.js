import React, { memo } from 'react'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'
import { ArrowForwardIos } from '@mui/icons-material'
import { categoryContent } from '../../data/category'

const ContainerStyled = styled.div`
  position:relative;
  background: #FFFFFF;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom:14px;
  cursor:pointer;
  display: flex;
  align-items:center;

  &:hover {
    box-shadow: 0px 4px 15px rgba(120, 116, 116, 0.2);
  }
`

const BadgeContainer = styled.div(({ theme }) => `
  background: #FFFFFF;
  border-radius: 10px;
  padding: 13px 16px;
  width:130px;
  display: flex;
  align-items:center;
  ${theme.breakpoints.down(500)} {
    width:auto;
  }
`)

const ArrowForwardIosStyled = styled(ArrowForwardIos)(({ theme }) => `
  position: absolute;
  right: 25px;
  ${theme.breakpoints.between(880, 1420)} {
    right: 10px;
  }
`)
export const CategoryBadgeListItem = memo(({ icon, text, ...rest }) => {
  const content = categoryContent[icon] || categoryContent.default
  const Icon = content.icon
  return (
    <ContainerStyled {...rest}>
      <Icon fontSize="large"/>
      <Typography marginLeft="16px" fontWeight={700} variant="body">{content.title}</Typography>
      <ArrowForwardIosStyled fontSize="small"/>
    </ContainerStyled>
  )
})

export const CategoryBadge = memo(({ icon, text, ...rest }) => {
  const content = categoryContent[icon] || categoryContent.default
  const Icon = content.icon
  return (
    <BadgeContainer {...rest}>
      <Icon fontSize="medium"/>
      <Typography marginLeft="16px" variant="body2">{content.title}</Typography>
    </BadgeContainer>
)})
