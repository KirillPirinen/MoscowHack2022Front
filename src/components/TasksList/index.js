import styled from '@emotion/styled'
import { MoreHoriz } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TaskStatus } from '../TaskStatus'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { setModal, clearModal } from '../../redux/actions/modal.ac'

const TaskListItemWrapper = styled.div`
  display:flex;
  background: #F9F9F9;
  border-radius: 16px;
  width:100%;
  min-height: 112px;
  padding: 24px;
  box-sizing: border-box;
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

export const TaskListItem = ({ title, description, status }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleDelete = () => {
    setModal('ACCEPTION', { 
      title: 'Вы действительно хотите удалить задачу?',
      description: 'После удаления восстановить задачу будет невозможно.',
      buttons: [
        { children: 'Отмена', onClick:clearModal },
        { children: 'Удалить', onClick:clearModal, sx:{ color:'red' } }
      ]
    })
  }

  return (
  <TaskListItemWrapper>
    <div>
      <Typography gutterBottom variant="h6" component="div" lineHeight={1.2} marginBottom='12px'>{title}</Typography>
      <TypographyStyled variant='body2' color='text.secondary'>{description}</TypographyStyled>
    </div>
    <InfoWrapper>
      <div>
        <IconButton sx={{width:'40px'}} onClick={handleClick}>
          <MoreHoriz/>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleDelete}>Удалить</MenuItem>
          <MenuItem onClick={handleClose}>Редактировать</MenuItem>
        </Menu>
      </div>
      <TaskStatus status={status} />
    </InfoWrapper>
  </TaskListItemWrapper>
)
}


const TaskListWrapper = styled.div`
  margin:25px 0;
  & > div:not(:last-of-type) {
    margin-bottom: 20px;
  }
`
export const TaskList = ({ 
  list = []
}) => (
  <TaskListWrapper>
    {list.map(task => <TaskListItem key={task.id} {...task}/>)}
  </TaskListWrapper>
)
