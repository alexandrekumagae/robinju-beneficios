import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'

import Logo from '../public/img/caju-logo.png'
import Avatar from '../public/img/caju-avatar.png'

function App() {
  return (
    <Box component="section" sx={{ maxWidth: 500, p: 4 }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        <img
          src={Avatar}
          alt="Avatar Caju"
          style={{
            width: 'auto',
            height: '200px',
          }}
        />
      </Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 4,
          color: '#252525',
        }}
      >
        Oi! <br /> É bom te ver por aqui!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="login">
          <Button
            variant="contained"
            sx={{ width: '100%', backgroundColor: '#e80537' }}
          >
            Entrar
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default App
