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

export const CategoriesList = ({ caregories = categoryContent }) => {
  const navigate = useNavigate()
  const formattedContent = Object.keys(categoryContent)
  const clickHandler = (category_id) => () => navigate(`category/${category_id}`)
  return (
    <DefaultWidgetWrapper>
      {formattedContent.map((key) => <CategoryBadgeListItem key={key} icon={key} text={categoryContent[key]} onClick={clickHandler(key)} />)}
    </DefaultWidgetWrapper>
  )
}
