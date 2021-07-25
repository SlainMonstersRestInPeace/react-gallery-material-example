import React from 'react'

import { styled } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'

const PhotoCard = styled('div')({
  height: '150px',
  width: '150px',
  display: 'block',
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
})

const Photo = styled('img')({
  top: '0',
  position: 'absolute',
  width: '100%',
  height: '100%',
});

const StyledLink = styled(Link)({
  display: 'block',
  top: '0',
  height: '100%',
  width: '100%',
  position: 'absolute',
  background: 'transparent'
});

export default ({
  photo
}) => {
  return (
    <PhotoCard>
      <Photo src={photo.thumbnailUrl}/>
      <Button className="button-more" variant="contained" color="primary">More</Button>
      <StyledLink to={`/image/${photo.id}`} />
    </PhotoCard>
  );
}