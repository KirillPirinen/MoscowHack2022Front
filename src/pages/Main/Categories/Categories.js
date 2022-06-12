import React from 'react'
import { AnimalsBox, ChildrenBox, DisabledBox, 
  IncidentBox, RestBox, NatureBox, Container, TypographyStyled, ArrowIcon } from './Boxes'
import { useNavigate } from 'react-router-dom'

export const Categories = () => {
  const navigate = useNavigate()
  const clickHandler = (category_id) => () => navigate(`category/${category_id}`)

  return (
    <Container>
      <NatureBox onClick={clickHandler('nature')}>
        <TypographyStyled>Природа</TypographyStyled>
      </NatureBox>
      <AnimalsBox onClick={clickHandler('animals')}>
        <TypographyStyled>Животные</TypographyStyled>
      </AnimalsBox>
      <IncidentBox onClick={clickHandler('incident')}>
        <TypographyStyled>Помощь людям, попавшим в черзвычайные ситуации</TypographyStyled>
      </IncidentBox>
      <DisabledBox onClick={clickHandler('elder')}>
        <TypographyStyled>Помощь пожилым людям и ветеранам</TypographyStyled>
      </DisabledBox>
      <ChildrenBox onClick={clickHandler('children')}>
        <TypographyStyled>Дети</TypographyStyled>
      </ChildrenBox>
      <RestBox onClick={clickHandler('other')}>
        <TypographyStyled>Все категории</TypographyStyled>
        <ArrowIcon/>
      </RestBox>
    </Container>
  )
}
