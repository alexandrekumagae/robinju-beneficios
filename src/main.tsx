import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import './index.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import ScopedCssBaseline from '@mui/material/ScopedCssBaseline'

import { Box } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScopedCssBaseline
      style={{
        backgroundColor: '#ffe6ec',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Box component="section" sx={{ maxWidth: 500, width: '100%' }}>
        <RouterProvider router={router} />
      </Box>
    </ScopedCssBaseline>
  </React.StrictMode>,
)
