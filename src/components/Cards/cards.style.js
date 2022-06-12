import styled from '@emotion/styled'
import { CategoryBadge } from '../CategoryBadge'
import { CardMedia } from '@mui/material'

export const Container = styled.div`
  position: relative;
  align-self:center;
`
export const CategoryBadgeStyled = styled(CategoryBadge)(({ theme }) => `
  position: absolute;
  top:20px;
  left:20px;
  ${theme.breakpoints.down(600)} {
    top:5px;
    left:5px;
  }
`)

export const CardMediaStyled = styled(CardMedia)`
  max-height: 220;
  border-radius: 16px;
`
export const CommonDetailWrapper = styled.div`
  padding: 10px;
  border-radius: 16px;
  display: flex;
  background: #F9F9F9;
  margin-bottom: 30px;
`

export const IconWidthTextWrapper = styled.div`
  display:flex;
  align-items:center;

  & > p {
    margin-left: 12px;
  }
`
