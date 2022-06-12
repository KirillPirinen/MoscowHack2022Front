import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom'
import { ProfileUserHeader } from '../../components/Cards/ProfileUserHeader'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

import DefaultPageWrapper from '../../components/DefaultPageWrapper';
import TasksEventsTab from './TasksEventsTab';
import { getFullInfo } from '../../redux/actions/user.ac';
import { FeedbackTab } from './FeedbackTab';
import { OwnTasksTab } from './OwnTasksTab';
import { DefaultWidgetLoader } from '../../components/DefaultWidgetWrapper';
import { getLoadingState } from '../../redux/selectors';

const TabStyled = styled(Tab)`
  text-transform:none;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`

const content = {
  one: <TasksEventsTab />,
  three: <FeedbackTab />,
  two: <OwnTasksTab />
}

export const Profile = () => {
  const user = useOutletContext()
  const dispatch = useDispatch()
  const [value, setValue] = useState('one');

  useEffect(() => {
    if(!user.isDetailedInfo) {
      dispatch(getFullInfo())
    }
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const isLoading = useSelector(getLoadingState)
  return (
    <DefaultPageWrapper>
      <ProfileUserHeader {...user} />
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <TabStyled value="one" label="Задачи / мероприятия" />
          <TabStyled value="two" label="Размещенные задачи" />
          <TabStyled value="three" label="Отзывы" />
        </Tabs>
        <DefaultWidgetLoader loading={isLoading}>
          {content[value]}
        </DefaultWidgetLoader>
      </Box>
    </DefaultPageWrapper>
  )
}
