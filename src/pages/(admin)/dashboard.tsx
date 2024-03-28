import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useCajuStore } from '../../store'

import { Header } from '../../components/admin/header'
import { Footer } from '../../components/admin/footer'

import { Box, Typography } from '@mui/material'
import { CardBenefit } from '../../components/admin/card-benefit'

import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined'

export function Dashboard() {
  const { login } = useCajuStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!login) {
      navigate('/login')
    }
  }, [])

  return (
    <>
      {login && (
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Box>
            <Header />
            <Box sx={{ pl: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: 1,
                  color: '#252525',
                  textTransform: 'uppercase',
                  mb: 2,
                }}
              >
                Benefícios
              </Typography>

              <Box sx={{ display: 'flex', overflowX: 'scroll', gap: 2 }}>
                <CardBenefit
                  icon={<HomeWorkOutlinedIcon />}
                  total={100}
                  name="Home Office"
                  color="#C3ABE7"
                />
                <CardBenefit
                  icon={<HomeWorkOutlinedIcon />}
                  total={100}
                  name="Home Office"
                  color="#C3ABE7"
                />
                <CardBenefit
                  icon={<HomeWorkOutlinedIcon />}
                  total={100}
                  name="Home Office"
                  color="#C3ABE7"
                />
                <CardBenefit
                  icon={<HomeWorkOutlinedIcon />}
                  total={100}
                  name="Home Office"
                  color="#C3ABE7"
                />
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: 1,
                    color: '#252525',
                    textTransform: 'uppercase',
                    mb: 2,
                  }}
                >
                  Total em benefícios
                </Typography>
              </Box>
            </Box>
          </Box>
          <Footer />
        </Box>
      )}
    </>
  )
}
