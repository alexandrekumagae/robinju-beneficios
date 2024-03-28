import { useCajuStore } from '../../store'

import { Avatar, Box, Typography } from '@mui/material'

export function Header() {
  const { login } = useCajuStore()

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Avatar>{login.split('')[0].toUpperCase()}</Avatar>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', marginBottom: 1, color: '#252525' }}
        >
          Oi, {login}
        </Typography>
      </Box>
    </Box>
  )
}
