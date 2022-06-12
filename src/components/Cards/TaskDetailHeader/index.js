import React from 'react'
import Typography from '@mui/material/Typography';
import { CardInfo } from '../TaskCards/CardInfo';
import styled from '@emotion/styled';
import { Container, CategoryBadgeStyled, CardMediaStyled, CommonDetailWrapper, IconWidthTextWrapper } from '../cards.style'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { categoryContent } from '../../../data/category';

const ContentWrapper = styled.div`
  margin: 20px;
`

const ContainerStyled = styled(Container)`
  min-width:200px;
  min-height:100px;
`

export const TaskDetailHeader = ({ image, title, creator, location, deadline, category }) => {
  const defaultCatContent = categoryContent[category] || categoryContent.default
  return (
        <CommonDetailWrapper>
          <ContainerStyled>
            {image && <CardMediaStyled
              sx={{ height: 220, marginRight: '16px', borderRadius: '16px' }}
              component="img"
              image={image}
            />}
            <CategoryBadgeStyled icon={category} text={defaultCatContent.title} />
          </ContainerStyled>
          <ContentWrapper>
              <Typography gutterBottom variant="h6" component="div" lineHeight={1.2} marginBottom="16px">
                {title}
              </Typography>
            <CardInfo creator={creator} location={location} deadline={deadline}/>
            <IconWidthTextWrapper>
              <CheckCircleIcon sx={{fill: '#2FAB88'}} />
              <Typography variant='body2' color='text.secondary'>
                Набор открыт, 0 откликов
              </Typography>
            </IconWidthTextWrapper>
          </ContentWrapper>
        </CommonDetailWrapper>
  )
}
