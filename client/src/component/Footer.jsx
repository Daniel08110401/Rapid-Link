import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const { palette } = useTheme();
  return (
      <>
          <Box sx={{
              height: '70px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: palette.primary.main
          }}>
              <Box component='span' sx={{ color: palette.primary.main }}>All rights reserved</Box>

          </Box>
      </>
  )
}

export default Footer