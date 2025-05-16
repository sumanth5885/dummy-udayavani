'use client'
import React from 'react'
import { Box, Skeleton, Grid } from '@mui/material'

const SkeltonLoader = () => {
  return (
    <Box sx={{ minHeight: '100vh', p: 3 }}>
      <Grid container spacing={3}>
      
        <Grid size={{xs:12,md:2.7}} sx={{ display: { xs: 'none', md: 'block' } }} >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
            <Skeleton animation="wave" variant="rectangular" height={60} sx={{ borderRadius: 2 }}/>
          </Box>
        </Grid>

       
        <Grid size={{xs:12,md:6}}>
          {[...Array(3)].map((_, index) => (
            <Box
              key={index}
              sx={{
                mb: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                minHeight: 280,
              }}
            >
              <Skeleton animation="wave" variant="rectangular" width="100%" height={180} sx={{ borderRadius: 2 }} />
              <Skeleton animation="wave" variant="text" width="70%" height={26} />
              <Skeleton animation="wave" variant="text" width="50%" height={20} />
              <Skeleton animation="wave" variant="text" width="90%" height={20} />
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="40%"
                height={36}
                sx={{ borderRadius: 1, mt: 1 }}
              />
            </Box>
          ))}
        </Grid>

       
        <Grid size={{xs:12,md:3}} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Skeleton animation="wave" variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
           
            <Skeleton animation="wave" variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
            <Skeleton animation="wave" variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
            <Skeleton animation="wave" variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
            <Skeleton animation="wave" variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
            <Skeleton animation="wave" variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SkeltonLoader
