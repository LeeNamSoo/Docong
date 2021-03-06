import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import UserLoginPage from './pages/auth/UserLoginPage'
import UserSignupPage from './pages/auth/UserSignupPage'
import UserAnalysisPage from './pages/user/UserAnalysisPage'
import UserTimerPage from './pages/user/UserTimerPage'
import UserTodoPage from './pages/user/UserTodoPage'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import NavBarPage from './pages/NavBarPage'

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      navBg: string
      pageBg: string
      greenButton: string
      gray: string
      lightGray: string
      darkGreenText: string
      greenText: string
      lightGreenText: string
      basicText: string
      todoCard: string
      doCard: string
      congTimer: string
      badge1: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: {
      navBg: string
      pageBg: string
      greenButton: string
      gray: string
      lightGray: string
      darkGreenText: string
      greenText: string
      lightGreenText: string
      basicText: string
      todoCard: string
      doCard: string
      congTimer: string
      badge1: string
    }
  }
}

const theme = createTheme({
  colors: {
    navBg: '#FAFAFA',
    pageBg: '#FFFFFF',
    greenButton: '#497248',
    gray: '#C4C4C4',
    lightGray: '#f9f7f7',
    darkGreenText: '#242424',
    greenText: '#455A47',
    lightGreenText: '#8A9788',
    basicText: '#000000',
    todoCard: '#FAFAFA',
    doCard: '#f9f7f7',
    congTimer: '#386129',
    badge1: '#BBDBE2',
  },
})

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.navBg};
`

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      if (location.pathname === '/' || location.pathname === '/join') {
        navigate('/timer')
      }
    } else if (location.pathname !== '/' && location.pathname !== '/join') {
      navigate('/')
      alert('docong ??? ????????? ??? ?????? ???????????????.')
    }
  }, [location, dispatch, navigate])

  useEffect(() => {
    if (location.pathname !== '/timer') {
      document.title = `docong`
    }
  }, [location.pathname])

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Routes>
          <Route path="/" element={<UserLoginPage />} />
          <Route path="/join" element={<UserSignupPage />} />
          <Route path="/*" element={<NavBarPage />}>
            <Route path="timer" element={<UserTimerPage />} />
            <Route path="user/todo" element={<UserTodoPage />} />
            <Route path="user/analysis" element={<UserAnalysisPage />} />
          </Route>
        </Routes>
      </Background>
    </ThemeProvider>
  )
}

export default App
