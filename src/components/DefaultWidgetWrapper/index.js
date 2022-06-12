import React, { useEffect, useState } from 'react'
import { tablet } from '../styles/media'
import styled from '@emotion/styled'
import { CircularProgress } from '@mui/material'
import Alert from '@mui/material/Alert';

const Wrapper =  styled.div`
background: #F9F9F9;
border-radius: 30px;
margin: 8px;
width: 30%;
padding: 30px;
max-width: 400px;
min-width: 240px;

@media ${tablet} {
  width: auto;
  max-width: 100%;
}
`
const LoaderWrapper =  styled.div`
  width:100%;
  height:500px;
  display:flex;
  justify-content: center;
  align-items:center;
`

export const DefaultWidgetLoader = ({ loading, error, children }) => {
  const [loader, setLoader] = useState(loading)

  useEffect(() => {
    let timer

    if(loading) {
      timer = setTimeout(() => {
        setLoader(true)
      }, 300)
    }

    setLoader(false)

    return () => clearTimeout(timer)

  }, [loading])

  if(error) return <Alert variant="filled" severity="error">Ошибка заргузки контента</Alert>
  return (
    loader ? <LoaderWrapper><CircularProgress size={66}/></LoaderWrapper>: children
  )
}

export default Wrapper
