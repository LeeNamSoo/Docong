import styled from 'styled-components'
import { Box, Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { darken } from 'polished'
import { useSelector } from 'react-redux'
import { RootState } from '../modules'
import { useNavigate } from 'react-router-dom'

const LogoImage = styled.img`
  height: 90px;
`

function NavBarContainer() {
  const userInfo = useSelector((state: RootState) => state.user.userInfo.data)

  const navigate = useNavigate()

  const onClickToTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate('/timer')
  }

  const onClickToUserTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate('/user/todo')
  }

  const onClickToExtension = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(
      'https://chrome.google.com/webstore/detail/docong/bfbkmincjfmfbnhghkbkjgnpocnjpinl'
    )
  }

  const onClickProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate('/user/analysis')
  }

  const onClickLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('persist:root')
    navigate('/')
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          height: '130px',
        }}
      >
        <LogoImage alt="Docong Logo" src="/images/Docong_Logo.png" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '60px',
          mb: '20px',
          height: '50px',
          fontSize: '25px',
          cursor: 'pointer',
          '&:hover': {
            background: (theme) => `${darken(0.1, theme.colors.navBg)}`,
          },
          '&:active': {
            background: (theme) => `${darken(0.25, theme.colors.navBg)}`,
          },
        }}
        onClick={(e: any) => onClickToTimer(e)}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl: '40px',
            color: (theme) => theme.colors.greenText,
          }}
        >
          TIMER
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pr: '40px',
            color: (theme) => theme.colors.greenText,
          }}
        >
          <ArrowForwardIosIcon />
        </Box>
      </Box>
      <Box sx={{ px: '40px', pb: '30px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '25px',
            mb: '15px',
            color: (theme) => theme.colors.greenText,
          }}
        >
          To Do
        </Box>
        <Button
          sx={{
            justifyContent: 'flex-start',
            boxShadow: 1,
            p: '8px 0 6px 10px',
            mb: '20px',
            fontSize: '15px',
          }}
          fullWidth
          size="small"
          color="success"
          onClick={onClickToUserTodo}
        >
          ??? To Do
        </Button>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '25px',
            color: (theme) => theme.colors.greenText,
          }}
        >
          GROUP
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '60px',
          mb: '15px',
          height: '40px',
          fontSize: '16px',
          cursor: 'pointer',
          '&:hover': {
            background: (theme) => `${darken(0.1, theme.colors.navBg)}`,
          },
          '&:active': {
            background: (theme) => `${darken(0.25, theme.colors.navBg)}`,
          },
        }}
        onClick={(e: any) => onClickToExtension(e)}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl: '40px',
            color: (theme) => theme.colors.greenText,
          }}
        >
          ??? ?????? ????????????
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pr: '40px',
            color: (theme) => theme.colors.greenText,
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </Box>
      </Box>
      <Box
        sx={{
          px: '40px',
          pb: '5px',
          fontSize: '25px',
          color: (theme) => theme.colors.greenText,
          cursor: 'pointer',
          '&:hover': {
            background: (theme) => `${darken(0.1, theme.colors.navBg)}`,
          },
          '&:active': {
            background: (theme) => `${darken(0.25, theme.colors.navBg)}`,
          },
        }}
        onClick={(e: any) => onClickProfile(e)}
      >{`${userInfo ? userInfo.name : ''}???`}</Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: '43px',
          height: '25px',
          fontSize: '16px',
          color: (theme) => theme.colors.greenText,
          cursor: 'pointer',
          '&:hover': {
            background: (theme) => `${darken(0.1, theme.colors.navBg)}`,
          },
          '&:active': {
            background: (theme) => `${darken(0.25, theme.colors.navBg)}`,
          },
        }}
        onClick={(e: any) => onClickLogout(e)}
      >
        ????????????
      </Box>
    </>
  )
}

export default NavBarContainer
