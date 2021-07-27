import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

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
  });

  return (
    <Box display="flex" flexDirection="column" mb={2}>
      <Box mb={2}>
        <Typography variant="h4">{label}</Typography>
      </Box>
      <Box display="flex" flexDirection="column"  >
        <Grid container direction="row" spacing={2}>
          {photoList}
        </Grid>
      </Box>
    </Box>
  )
}