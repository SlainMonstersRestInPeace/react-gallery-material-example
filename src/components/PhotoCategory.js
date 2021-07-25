import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import PhotoCard from './PhotoCard'

import { v4 as uuid } from 'uuid'

export default ({
  photos,
  label
}) => {
  const photoList = photos.map(photo => {
    return (
      <Grid item key={uuid()}>
        <PhotoCard photo={photo}/>
      </Grid>
    );
  })

  return (
    <Box mb={2}>
      <Typography variant="h4" className="mb-2">{label}</Typography>
      <Grid container item spacing={2}>
        {photoList}
      </Grid>
    </Box>
  )
}