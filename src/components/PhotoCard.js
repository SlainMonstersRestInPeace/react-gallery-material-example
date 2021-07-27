import React from 'react'


import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  photo: {
    top: '0',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  link: {
    display: 'block',
    top: '0',
    height: '100%',
    width: '100%',
    position: 'absolute',
    background: 'transparent'
  },
  root: {
    height: '150px',
    width: '150px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  
    '& .button-more': {
      opacity: '0',
      transition: 'all 0.1s ease-in'
    },
  
    '&:hover .button-more': {
      opacity: '1'
    }
  }
})

export default ({
  photo
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={photo.thumbnailUrl} className={classes.photo}/>
      <Button className="button-more" variant="contained" color="primary">More</Button>
      <Link to={`/image/${photo.id}`} className={classes.link} />
    </Box>
  );
}