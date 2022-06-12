import React from 'react'
import { Container, CategoryBadgeStyled, CardMediaStyled } from '../cards.style'

const props = {
  vertical: { height: 220, borderRadius: '16px' },
  horizontal: { width: 360, marginRight: '16px', borderRadius: '16px' }
}

export const ImageContainer = ({ src = 'https://klike.net/uploads/posts/2019-05/1558692270_3.jpg', type = 'vertical', icon, text }) => (
  <Container>
    <CardMediaStyled
      sx={props[type]}
      component="img"
      image={src}
    />
    <CategoryBadgeStyled text={text} icon={icon} />
  </Container>
)
