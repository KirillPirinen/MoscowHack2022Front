import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { CommonDetailWrapper } from '../../components/Cards/cards.style'
import { TaskDetailHeader } from '../../components/Cards/TaskDetailHeader'
import { GreenButton } from '../../components/Buttons/GreenButton'
import { CommentsBlock, CommentInsertPanel } from '../../components/Comments'
import { Tags } from '../../components/Tags'
import { useParams } from 'react-router-dom'
import { withBreadCrumbs } from '../../utils/hoc/withBreadCrumbs'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskDetailSelector, getUserState } from '../../redux/selectors'
import { getTaskDetail } from '../../redux/actions/tasks'

const CommonDetailWrapperStyled = styled(CommonDetailWrapper)`
  display:block;
  padding:24px;
`

export const TaskDetail = withBreadCrumbs(({ breadcrumbs }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const taskDetail = useSelector(getTaskDetailSelector)
  const user = useSelector(getUserState)

  const fetchDetail = () => dispatch(getTaskDetail(id, { add:'tags' }))
  
  useEffect(() => {
    window.scrollTo(0, 0)
    fetchDetail()
  }, [])

  return (
    <div>
      <TaskDetailHeader {...taskDetail} />
      <CommonDetailWrapperStyled>
        { taskDetail.description && (<>
        <Typography gutterBottom variant="h6" lineHeight={1.2} marginBottom="24px">
          Описание задачи
        </Typography>
        <Typography variant="body" color="text.secondary">
          {taskDetail.description}
        </Typography>
        </>
        )}
        <Tags list={taskDetail.tags} />
      </CommonDetailWrapperStyled>
      <GreenButton text={'Откликнуться на задачу'}/>
      <CommentsBlock list={taskDetail.comments} onReload={fetchDetail} user={user} />
      {user.email && <CommentInsertPanel task_id={id} onReload={fetchDetail} />}
    </div>
  )
})
