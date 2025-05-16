import { Grid } from '@mui/material'
import React from 'react'
import Sidebar from '../ClientComponents/Sidebar/Sidebar'
import RightPart from '../right-part/page'
import ResponsiveImage from '../ClientComponents/ResponsiveImage/ResponsiveImage'

const page = () => {
    return (
        <Grid container spacing={2} sx={{ margin: '10px' }}>
            <Grid size={{ md: 2.5 }} >
                <Sidebar />
            </Grid>
            <Grid container size={{ md: 6.5 }}>
                <ResponsiveImage/>
            </Grid>
            <Grid size={{ md: 3 }}>
                <RightPart />
            </Grid>

        </Grid>
    )
}

export default page