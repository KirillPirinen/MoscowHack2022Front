import styled from '@emotion/styled'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { tablet } from '../styles/media'
import { useSelector } from 'react-redux'
import { getWidgetState } from '../../redux/selectors'
import componentsMap from '../../widgets/registredContent'
import Adapter from '../Adapter/Adapter'

const AppWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  min-height:100vh;

  @media ${tablet} {
    flex-direction: column;
  }
`
const ContentWrapperStyled = styled.div`
  display:flex;
  flex-direction:column;
  margin: 2.2%;
  flex-grow:1;
  max-width:1000px;
`

const MainStyled = styled.main`
  margin-top: 5%;
  flex-grow: 1;
`

export const Wrapper = () => {
  const { widgetType, widgetProps } = useSelector(getWidgetState)
  return (
  <AppWrapperStyled>
    <ContentWrapperStyled>
      <Header/>
      <MainStyled>
        <Outlet/>
      </MainStyled>
      <Footer/>
    </ContentWrapperStyled>
    <Adapter
      compType={widgetType}
      registredContent={componentsMap}
      {...widgetProps}
    />
  </AppWrapperStyled>
  )
}
