import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm, SubmitHandler } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowBack } from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'

import Logo from '../../public/img/caju-logo.png'

const LoginSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(3),
})

interface InputProps {
  login: string
  password: string
}

export function Login() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>({
    resolver: zodResolver(LoginSchema),
  })

  const [hasLoginError, setHasLoginError] = useState<boolean>(false)

  const onSubmit: SubmitHandler<InputProps> = (data) => {
    if (data.login === 'admin' && data.password === 'admin') {
      setHasLoginError(false)
      navigate('/dashboard')
    } else {
      return setHasLoginError(true)
    }
  }

  return (
    <Box sx={{ backgroundColor: '#ffe6ec' }}>
      <Box>
        <IconButton aria-label="delete" onClick={() => history.go(-1)}>
          <ArrowBack />
        </IconButton>
      </Box>
      <Box>
        <Box
          sx={{
            backgroundColor: '#FFF',
            borderRadius: '10px',
            p: '24px',
            m: '12px',
          }}
        >
          <Box
            sx={{
              marginBottom: '32px',
            }}
          >
            <img
              src={Logo}
              alt="Logo Caju"
              style={{
                width: 'auto',
                height: '70px',
              }}
            />
          </Box>
          {hasLoginError && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              Erro: login ou senha incorretos!
            </Alert>
          )}
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', marginBottom: 1, color: '#252525' }}
          >
            Acesse seu Caju
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', marginBottom: 4 }}
          >
            Os mesmos dados de acesso são utilizados no app Caju
          </Typography>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="login"
                label="CPF"
                variant="outlined"
                sx={{ marginBottom: 2, width: '100%' }}
                required={true}
                {...register('login')}
              />
              {errors.login && (
                <Box sx={{ marginBottom: 2, color: 'red' }}>
                  {errors.login.message}
                </Box>
              )}

              <TextField
                id="password"
                label="Senha"
                variant="outlined"
                sx={{ width: '100%', marginBottom: 2 }}
                required={true}
                type="password"
                {...register('password')}
              />
              {errors.password && (
                <Box sx={{ marginBottom: 2, color: 'red' }}>
                  {errors.password.message}
                </Box>
              )}

              <Button
                variant="contained"
                size="large"
                sx={{ width: '100%' }}
                type="submit"
              >
                Entrar
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
