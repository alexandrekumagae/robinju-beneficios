import { Box, Typography } from '@mui/material'

interface CardBenefitProps {
  icon: React.ReactNode
  total: number
  name: string
  color: string
}

export function CardBenefit({ icon, total, name, color }: CardBenefitProps) {
  return (
    <Box sx={{ bgcolor: `${color}`, p: 3, borderRadius: 4, minWidth: '120px' }}>
      {icon}
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
        R$ {total}
      </Typography>
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
        {name}
      </Typography>
    </Box>
  )
}
