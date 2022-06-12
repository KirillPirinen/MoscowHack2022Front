import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { EventList } from '../../components/EventsList';
import { useSelector } from 'react-redux';
import { getUserAcceptedTasks, getUserEvents } from '../../redux/selectors';

export default function TasksEventsTab() {
  const [alignment, setAlignment] = useState('')
  const tasks = useSelector(getUserAcceptedTasks) || []
  const events = useSelector(getUserEvents) || []

  const composed = alignment ==='Events' ? events : alignment === 'Tasks' ? tasks : [...tasks, ...events]

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  }

  return (
    <div>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{marginTop:'20px'}}
      >
        <ToggleButton sx={{textTransform:'none'}} value="" aria-label="right aligned">
          Все
        </ToggleButton>
        <ToggleButton sx={{textTransform:'none'}} value="Tasks" aria-label="left aligned">
          Задачи
        </ToggleButton>
        <ToggleButton sx={{textTransform:'none'}} value="Events" aria-label="centered">
          События / Мероприятия
        </ToggleButton>
      </ToggleButtonGroup>
      <EventList list={composed} />
    </div>
   
  )
}
