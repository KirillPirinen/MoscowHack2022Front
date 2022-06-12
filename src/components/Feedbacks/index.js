import styled from '@emotion/styled'
import React from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import StarIcon from '@mui/icons-material/Star';

const CommentWrapper = styled.div`
  display:flex;
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
  margin:40px;
`
const CommentCount = styled.span`
  color: #747474;
`

const RatingFeedbackWrapper = styled.div`
  display:flex;
`

const RatingFeedback = ({ rating = 4.5 }) => (
    <RatingFeedbackWrapper>
      <StarIcon fontSize='small' sx={{ fill:'#F1DA62', margin:'0 7px 0 10px' }} />
      <Typography variant="body2" color="text.secondary">{`${rating}/5`}</Typography>
    </RatingFeedbackWrapper>
)

export const Feedback = ({ review, score, creator, created }) => {
  return (
    <CommentWrapper>
      <Avatar 
        src={creator.avatar}
        sx={{ marginRight: '12px' }}
      />
      <CommentContentWrapper>
        <RatingFeedbackWrapper>
          <Typography variant="body" sx={{ fontWeight: 600, marginBottom: '8px' }}>
            {creator.first_name + ' ' + creator.last_name || ''}
          </Typography>
          <RatingFeedback rating={score} />
        </RatingFeedbackWrapper>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>{review}</Typography>
        <Typography variant="body2" sx={{ color: '#B8B8B8' }}>{created}</Typography>
      </CommentContentWrapper>
    </CommentWrapper>
  )
}

export const Feedbacks = ({ list = [] }) => (
  <CommentsBlockWrapper>
    <Typography gutterBottom variant="h6" lineHeight={1.2} margin="24px 0">
        Отзывы&nbsp;&nbsp;<CommentCount>({list.length})</CommentCount>
    </Typography>
    {list.map(feedback => <Feedback key={feedback.id} {...feedback}/>)}
  </CommentsBlockWrapper>
)


const TextareaAutosizeStyled = styled(TextareaAutosize)`
  width:100%;
  border:none;
  &:focus {
    border:none;
    outline: 0;
  }
`
export const CommentInsertPanel = () => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'}}
    >
      <InputBase
        placeholder="Оставьте свой отзыв..."
        multiline
        maxRows={4}
        sx={{ minHeight: '60px', padding:'5px 10px' }}
        fullWidth
      />
      <IconButton sx={{ p: '10px' }} aria-label="directions">
        <SendOutlinedIcon />
      </IconButton>
    </Paper>
  )
}
