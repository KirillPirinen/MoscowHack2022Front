import styled from '@emotion/styled'
import React from 'react'

const statusText = {
  Search: 'Поиск исполнителя',
  Closure: 'Завершен',
  'In work': 'В работе',
  default: 'Неопределен'
}

const TaskStatusWrapper = styled.span`
  width: max-content;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  padding: 8px 16px;
  border-radius: 20px;
  color: ${({ status }) => status ? 'white' : 'black' };
  background: ${({ status }) => {
    switch (status) {
      case 'Search': return '#5381F5'
      case 'Closure': return '#3ABD98'
      case 'In work': return '#F5B553'
      default: return 'white'
    }
  }
};
`

export const TaskStatus = ({ status }) => 
  <TaskStatusWrapper status={status}>
    {statusText[status] || statusText.default}
  </TaskStatusWrapper>
