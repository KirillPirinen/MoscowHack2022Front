import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import network from '../../network/network'
import { useParams } from 'react-router-dom'
import endPoints from '../../network/endPoints'

const Wrapper = styled.div`
  display:flex;
  gap:22px;
`
const ContentBlock = styled.div`
  box-sizing: border-box;
  background: #F9F9F9;
  border-radius: 16px;
  padding:24px;
`

const Logo = styled(ContentBlock)`
  min-width: 355px;
  padding: 10px;
  align-self: start;
`

const ImageWrapper = styled.div`
  background: white;
  text-align:center;
  padding:20px 0;
`

export const OrganiztionDetail = () => {
  const [org, setOrg] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    network.get(endPoints.getOrganizationInfoById(id))
    .then(({ data }) => setOrg(data))
    .catch(() => {
      setMessages({ status: true, message: 'Ошибка загрузки данных', level: 'error' })
    })
  }, [])

  return org && (
    <Wrapper>
      <Logo>
        <ImageWrapper>
          <img src={org.logo} alt="Лого тут блин"/>
        </ImageWrapper>
      <Typography variant='h6' marginBottom="24px" marginTop="24px" align='center'>{org.name}</Typography>
      </Logo>
      <ContentBlock style={{ width:'100%' }}>
        <Typography variant='h6' marginBottom="24px">О компании</Typography>
        <Typography variant='body2' color="text.secondary">{org.description}</Typography>
      </ContentBlock>
    </Wrapper>
  )
}
