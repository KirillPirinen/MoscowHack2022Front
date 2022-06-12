import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import React, { useCallback, useEffect } from 'react'
import { SearchPanel } from '../../components/SearchPanel/SearchPanel'
import { Categories } from './Categories/Categories'
import { setWidget } from '../../redux/actions/widget.ac'
import { useNavigate } from 'react-router-dom'
import { setMessages } from '../../redux/actions/messages.ac'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:60px;
`

export const Main = () => {
  const navigate = useNavigate()
  
  const onSubmit = useCallback(({ text }) => {
    if(text.length) navigate(`/search?text=${text}`)
    else {
      setMessages({ message: 'Поле поиска не может быть пустым' })
    }
  }, [])

  return (
    <Wrapper>
        <Typography variant="h6" fontWeight={400} color="#6A6A6A" marginBottom="16px" gutterBottom>
          Присоединись к общему делу
        </Typography>
        <Typography variant="h3" align="center" fontWeight={500} marginBottom="32px" gutterBottom>
          Героем стать легче, чем ты думаешь!
        </Typography>
        <SearchPanel onSubmit={onSubmit} />
        <Categories/>
    </Wrapper>
  )
}
