import React from 'react'

import { styled } from '@material-ui/core/styles';

const Photo = styled('img')({
  width: '150px',
  height: '150px',
});

export default ({
  photo
}) => {
  return (
    <Photo src={photo.thumbnailUrl}/>
  );
}