import * as React from 'react'

import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'

export function Footer() {
  const [value, setValue] = React.useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          label="Benefícios"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Feirinha"
          icon={<ShoppingBagOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Cartões"
          icon={<CreditCardOutlinedIcon />}
        />
      </BottomNavigation>
    </Box>
  )
}
