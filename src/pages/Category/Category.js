import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import { useParams } from 'react-router-dom'
import TasksList from './Boxes'
import { setWidget } from '../../redux/actions/widget.ac'
import {ButtonWithoutBackGround} from "../../components/Buttons/ButtonWithoutBackGround";
import {setModal} from "../../redux/actions/modal.ac";
import {useDispatch, useSelector} from "react-redux";
import { getTasksByCategory } from '../../redux/actions/tasks'
import { getCategoryInfo } from '../../redux/actions/category.ac'
import { getCategory, getLoadingState, getUserState } from '../../redux/selectors'
import { DefaultWidgetLoader } from '../../components/DefaultWidgetWrapper'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:60px;
`

const stub = { id:"animals", title:"Животные", description: "В данном разделе представлены актальные задачи помощи нашим пушистым друзьям"}

export const Category = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(getUserState)

  const setCreateTaskModal = () => {

    if(user.email) {
      return setModal('CREATE_TASK')
    } 
    
    setModal('LOGIN')
  }

  const { text, description, id: saved_id } = useSelector(getCategory)

  useEffect(() => {
    setWidget('CATEGORIES')
    return () => setWidget('CALENDAR')
  }, [])

  useEffect(() => {
    if(!text || id !== saved_id) {
      dispatch(getCategoryInfo(id))
    }
    dispatch(getTasksByCategory(id, { limit: 10 }))
  }, [id])

  const isLoading = useSelector(getLoadingState)

  return (
      <Wrapper>
        <DefaultWidgetLoader loading={isLoading}>
          {text && 
          <Typography variant="h3" align="center" fontWeight={500} marginBottom="16px" gutterBottom>
            {text}
          </Typography>}
          {description && 
          <Typography variant="h6" align="center" fontWeight={400} color="#6A6A6A" marginBottom="32px" gutterBottom>
            {description}
          </Typography>}
          <ButtonWithoutBackGround onClick={setCreateTaskModal} text={'Добавить задание'}/>
          <TasksList categoryTitle={text} categoryId={id} />
        </DefaultWidgetLoader>
      </Wrapper>
    )
  }
