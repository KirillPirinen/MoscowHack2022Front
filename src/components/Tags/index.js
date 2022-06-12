import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const TagsContainer = styled.div`
  margin-top:20px;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
`
const Tag = styled(Typography)`
  padding: 6px 12px;
  background: #FFFFFF;
  border: 1px solid #D8DAE0;
  border-radius: 4px;
  vertical-align: middle;
`

export const Tags = ({ list = [] }) => (
  <TagsContainer>
    {list.map(tag => <Tag key={tag} variant='body2'>{tag}</Tag>)}
  </TagsContainer>
)
