import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import { setModal, clearModal } from '../../redux/actions/modal.ac'
import { MosRuLink, OrganizationLink } from '../Links/OrganizationLink'
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import { TaskStatus } from '../TaskStatus'
import { msk } from '../../images'
import { useDispatch } from 'react-redux'
import { unsubscribeHandler } from '../../redux/actions/event.ac'

const EventListItemWrapper = styled.div`
  background: #F9F9F9;
  border-radius: 16px;
  width:100%;
  min-height: 112px;
  padding: 24px;
  box-sizing: border-box;
  &:hover {
    transform:scale(1.02);
    cursor:pointer;
  }
`
const TypographyStyled = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2; 
  -webkit-box-orient: vertical;
`

const InfoWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items:flex-end;
  justify-content: space-between;
`
const LinkWrapper = styled.div`
  display:flex;
  align-items:center;
  margin-top:18px;
`

const LinkButtonWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:flex-end;
`

export const EventListItem = ({ title = titleStub, description = desc, rating = 4.5, status, onDelete, creator }) => {
  return (
  <EventListItemWrapper>
      <Typography gutterBottom variant="h6" component="div" lineHeight={1.2} marginBottom='12px'>{title}</Typography>
      <TypographyStyled variant='body2' color='text.secondary'>{description}</TypographyStyled>
    <LinkButtonWrapper>
      <LinkWrapper>
          {!status && <MosRuLink children="Правительство Москвы"/>}
          {creator?.first_name && (
            <>
            <OrganizationLink image={creator.avatar} to={`/user/${creator.id}`}>{creator.first_name + ' ' + creator.last_name || ' '}</OrganizationLink>
            {creator.rating && (
              <>
                <StarIcon fontSize='small' sx={{ fill:'#F1DA62', margin:'0 7px 0 10px' }} />
                <Typography variant="body2" color="text.secondary">{`${creator.rating}/5`}</Typography>
              </>
            )}
            </>
          )}
      </LinkWrapper>
        {status && <TaskStatus status={status} />}
        <Button onClick={onDelete} sx={{ textTransform: 'none', fontSize: '13px' }}>
          <CloseIcon/>
          {status ? 'Не выполнять' : 'Не участвовать'}
        </Button>
    </LinkButtonWrapper>
  </EventListItemWrapper>
)
}


const EventListWrapper = styled.div`
  margin:25px 0;
  & > div:not(:last-of-type) {
    margin-bottom: 20px;
  }
`
export const EventList = ({ 
  list = []
}) => {

  const dispatch = useDispatch()

  const handlerUnsubscribe = useCallback((event) => {
    setModal('ACCEPTION', { 
      title: `Вы действительно ${event.status ? 'хотите отказаться от выполнения задачи' : 'передумали приходить на событие'}?`,
      buttons: [
        { children: 'Отмена', onClick:clearModal },
        { children: 'Да', onClick:() => dispatch(unsubscribeHandler(event.id)), sx:{ color:'red' } }
      ]
    })
  }, [])

  return (
    <EventListWrapper>
      {list.map(event => <EventListItem key={event.id} {...event} onDelete={() => handlerUnsubscribe(event)} />)}
    </EventListWrapper>
  )
}
