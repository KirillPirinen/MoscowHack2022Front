import styled from '@emotion/styled'
import React from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useForm } from "react-hook-form";
import network from '../../network/network'
import endPoints from '../../network/endPoints';
import { CloseButton } from '../Buttons/CloseButton';
import { clearModal, setModal } from '../../redux/actions/modal.ac';

const CommentWrapper = styled.div`
  display:flex;
  position:relative;
  &:not(:last-of-type) {
    margin-bottom:20px;
  }
`
const CommentContentWrapper = styled.div`
  display:flex;
  flex-direction: column;
`
const CommentsBlockWrapper = styled.div`
  display:flex;
  flex-direction: column;
  margin:60px 0 40px;
`
const CommentCount = styled.span`
  color: #747474;
`
const DeleteButton = styled(CloseButton)`
  position:absolute;
  right:20px;
  top:0;
`

export const Comment = ({ creator, comment, created, onDelete }) => {
  return (
    <CommentWrapper>
      <Avatar 
        src={creator.avatar}
        sx={{ marginRight: '12px' }}
      />
      <CommentContentWrapper>
        <Typography variant="body" sx={{ fontWeight: 600, marginBottom: '8px' }}>{creator.first_name + ' ' + creator.last_name || ''}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>{comment}</Typography>
        <Typography variant="body2" sx={{ color: '#B8B8B8' }}>{created}</Typography>
      </CommentContentWrapper>
      {onDelete && <DeleteButton onClick={onDelete} />}
    </CommentWrapper>
  )
}

export const CommentsBlock = ({ list = [], onReload, user }) => {

  const deleteHandler = (comment_id) => {
    clearModal()
    network.delete(endPoints.manipulateComment(comment_id)).then(({ status }) => {
      if (status === 200) {
        onReload()
      }
    })
  }
  
  const onDelete = (comment_id) => () => {
    setModal('ACCEPTION', { 
      title: `Вы действительно хотите удалить комментарий?`,
      buttons: [
        { children: 'Отмена', onClick:clearModal },
        { children: 'Да', onClick:() => deleteHandler(comment_id), sx:{ color:'red' } }
      ]
    })
  }

  return (
    <CommentsBlockWrapper>
      <Typography gutterBottom variant="h6" lineHeight={1.2} margin="24px 0">
          Комментарии к задаче&nbsp;&nbsp;<CommentCount>({list.length})</CommentCount>
      </Typography>
      {list.map(comment => <Comment 
      {...comment}
      onDelete={user.email && user.id === comment?.creator.id && onDelete(comment.id)}
      />)}
    </CommentsBlockWrapper>
  )
}

export const CommentInsertPanel = ({ task_id, onReload }) => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    network.post(endPoints.manipulateComment(task_id), data).then(({ status }) => {
      if(status === 200) {
        onReload()
        reset()
      }
    })
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'}}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputBase
        placeholder="Оставьте свой комментарий..."
        multiline
        maxRows={4}
        sx={{ minHeight: '60px', padding:'5px 10px' }}
        fullWidth
        {...register('comment')}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="directions">
        <SendOutlinedIcon />
      </IconButton>
    </Paper>
  )
}
