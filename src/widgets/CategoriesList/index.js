import React from 'react'
import DefaultWidgetWrapper from '../../components/DefaultWidgetWrapper'
import { CategoryBadgeListItem } from '../../components/CategoryBadge'
import { useNavigate } from 'react-router-dom'
import { categoryContent } from '../../data/category'

const stub = [
  { id: "children" , text:"Дети" },
  { id: "law" , text:"Права человека" },
  { id: "nature" , text:"Природа" },
  { id: "missing" , text:"Поиск пропавших" },
  { id: "sport" , text:"Спорт и события" },
  { id: "coronavirus" , text:"Коронавирус" },
  { id: "elder" , text:"Пожилые и ветераны" },
  { id: "health" , text:"Здравоохранение" },
  { id: "incident" , text:"ЧС" },
  { id: "animals", text: "Животные" },
  { id: "other", text:"Остальное" },
]

export const CategoriesList = ({ caregories = stub }) => {
  const navigate = useNavigate()
  const clickHandler = (category_id) => () => navigate(`category/${category_id}`)
  return (
    <DefaultWidgetWrapper>
      {caregories.map(({id, text}) => <CategoryBadgeListItem key={id} icon={id} text={text} onClick={clickHandler(id)} />)}
    </DefaultWidgetWrapper>
  )
}
