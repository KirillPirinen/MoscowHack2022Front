import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import DefaultPageWrapper from '../../components/DefaultPageWrapper'
import CardMedia from '@mui/material/CardMedia';

const ImageWrapper = styled.div`
  margin-bottom:42px;
  text-align:center;
`

export const About = () => (
  <DefaultPageWrapper>
    <Typography variant='h3' fontWeight={500} align="center" marginBottom="36px">О Сервисе</Typography>
    <ImageWrapper>
      <CardMedia 
        component="img"
        height="340px"
        image="https://imageup.ru/img49/3953241/image-13.jpg"
        alt="Paella dish"
        sx={{ borderRadius: '16px', margin: '45px 0' }}
      />
    </ImageWrapper>
    <Typography variant='body' color="text.secondary">
      <p>
      Мы собираем корм, ткань для домиков животных, лекарства и бинты. ПУТЬ ДОМОЙ - фестиваль, где животные обретают свой дом!
        28 - 29 мая намытые и начесанные собаки и котики будут встречать посетителей в Dogs Hall (Мурино).
      </p>
      <p>
      Найти кошачьего и собачьего друга проще простого! Приюты и кураторы привезут своих подопечных разного размера, окраса и характера, а приветливые волонтеры расскажут об особенностях животного и этапах пристройства.
         Вход свободный. На фестивале приютов от благотворительной организации “Путь домой” можно будет познакомиться с собаками, ждущими любящего хозяина, а также узнать подробнее о деятельности городских приютов.
      </p>
      <p>
      Стенду нужна помощь волонтёров при организации благотворительных розыгрышей, помощь при информировании о приютах и питомцах, помощь в фото- и видео- съёмке и непосредственно помощь в демонтаже зоны к концу мероприятия.
      </p>
    </Typography>
  </DefaultPageWrapper>
)
