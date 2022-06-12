import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardInfo } from './CardInfo';
import textShortener from '../../../utils/textShortener';
import { ImageContainer } from './ImageContainer'
import { CategoryBadge } from '../../CategoryBadge'
import styled from '@emotion/styled';
import { categoryContent } from '../../../data/category';

const CategoryBadgeStyled = styled(CategoryBadge)`
  background: #F9F9F9;
  margin-bottom: 20px;
`
const ContentWrapper = styled.div`
  margin: 20px;
`

const CardContentStyled = styled(CardContent)(({ type }) => `
  padding: 10px;
  box-shadow: 0px 4px 15px rgba(120, 116, 116, 0.15); 
  border-radius: 16px;
  height: 100%;

  @media (min-width: 600px) {
    display: ${type === 'horizontal' ? 'flex' : 'block'}
  }

`)

const TypographyStyled = styled(Typography)(({ textCut }) => {
  const maxHeight = textCut ? '56px' : '222px'
  const lineClamp = textCut ? '3' : '300'
  return `
  max-height: ${maxHeight};
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: ${lineClamp};
    line-clamp: ${lineClamp}; 
   -webkit-box-orient: vertical;
`
})

export const BaseImageCard = ({ 
  orientation = 'vertical',
  description,
  deadline,
  location,
  category, 
  image = false, 
  textLimit = 220, 
  textCut = false, 
  onClick,
  creator,
  title
}) => {
  const hasImage = Boolean(image)

  const defaultCatContent = categoryContent[category] || categoryContent.default

  return (
    <Card onClick={onClick} sx={{ height: '100%', maxHeight:520, boxShadow:'0px 4px 15px rgba(120, 116, 116, 0.15)'}}>
      <CardActionArea sx={{ height: '100%', boxSizing:'border-box'}}>
        <CardContentStyled type={orientation}>
          {hasImage && <ImageContainer src={image} type={orientation} icon={category} text={defaultCatContent.title} />}
          {!hasImage && <CategoryBadgeStyled icon={category} text={defaultCatContent.title} />}
          <ContentWrapper>
              <Typography gutterBottom variant="h6" component="div" lineHeight={1.2} marginBottom="16px">
                {title}
              </Typography>
              <TypographyStyled variant="body2" color="text.secondary" marginBottom="18px" textCut={textCut}>
                {textShortener(textLimit, description || 'Описания нет')}
              </TypographyStyled>
            <CardInfo creator={creator} deadline={deadline} location={location} />
          </ContentWrapper>
        </CardContentStyled>
      </CardActionArea>
    </Card>
  )
}
