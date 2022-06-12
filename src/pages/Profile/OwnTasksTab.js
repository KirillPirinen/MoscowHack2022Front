import React from 'react'
import { useSelector } from 'react-redux'
import { getUserCreatedTasks } from '../../redux/selectors'
import { TaskList } from '../../components/TasksList';

export const OwnTasksTab = () => {
  const tasks = useSelector(getUserCreatedTasks)
  return (
    <TaskList list={tasks}/>
  )
}
