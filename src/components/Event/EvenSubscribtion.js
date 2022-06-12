import { Typography } from '@mui/material'
import React, { useState, useEffect, useCallback } from 'react'
import { CloseButtonStyled, Wrapper } from './event.style'
import Avatar from '@mui/material/Avatar';
import { clearModal, setModal } from '../../redux/actions/modal.ac';
import styled from '@emotion/styled';
import { GreenButton } from '../Buttons/GreenButton';
import network from '../../network/network'
import endPoints from '../../network/endPoints'
import plural from 'plural-ru'
import { useDispatch, useSelector } from 'react-redux';
import { getUserState } from '../../redux/selectors';
import { getCalendarEvents } from '../../redux/actions/calendar.ac';
import { getFullInfo } from '../../redux/actions/user.ac';

const AvatarsWrapper = styled.div`
  display: flex;
  margin:20px 0;
  align-items:center;
  & > div {
    border: 2px solid #FFFFFF;
    &:not(:first-child) {
     margin-left: -20px; 
    }
  }
`

export const EventSubscribtion = ({ id, title, description, participants_count, participants }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(getUserState)
  
  const isDisabled = participants?.some(({ email }) => email === user.email)

  const subscribeHandler = useCallback(() => {
    if(!user.email) return setModal('LOGIN')
    setLoading(true)
    clearModal()
    network.patch(endPoints.subscribeEvent(id)).then(({ status }) => {
      if(status === 200) {
        dispatch(getCalendarEvents())
        dispatch(getFullInfo())
      }
    }).finally(() => setLoading(false))
  }, [])

  return (
   <Wrapper>
     <CloseButtonStyled onClick={clearModal}/>
     <Typography variant="h6" fontWeight={500} marginBottom="24px">{title}</Typography>
     <Typography variant='body' color="text.secondary" marginBottom="20px">
        {description}
     </Typography>
     <AvatarsWrapper>
       {participants?.slice(0, 5).map(avatar => (<Avatar key={avatar.id} alt={`${avatar.first_name} ${avatar.last_name}`} src={avatar.avatar} />))}
      <Typography variant='body2' marginLeft="6px">
        {participants_count + ' ' + plural(participants_count, 'участник', 'участника', 'участников')}
      </Typography>
    </AvatarsWrapper>
    {isDisabled ? <Typography variant='body2'>Вы уже участвуете в мероприятии</Typography> : <GreenButton text="Принять участие" fullWidth onClick={subscribeHandler} loading={loading}/>}
   </Wrapper> 
  )
}
