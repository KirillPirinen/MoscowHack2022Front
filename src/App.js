import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Router from './router'
import './global.css'
import './normolize.css'
import { RootModal } from './components/Modal/Modal'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/components/styles/theme'
import { AppSnackBar } from './components/SnackBar/SnackBar'
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    // <React.StrictMode>
      <Provider store={store}>   
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Router />
              <RootModal />
              <AppSnackBar />
            </BrowserRouter>
          </ThemeProvider>
      </Provider>
    // </React.StrictMode>
  )
}

export default App;
