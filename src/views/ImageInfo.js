import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import ImageInfoCard from '../components/ImageInfoCard';

import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchPhoto } from '../redux/reducers/app';

import { styled } from '@material-ui/core/styles'

const Content = styled('div')({
  "&": {
    animation: "$fade-in ease-in 0.1s"
  },
  "@global" : {
    "@keyframes fade-in": {
      "0%": {
        opacity: "0",
        transform: "translateY(20px)"
      },
      "100%": {
        opacity: '1'
      }
    } 
  }
});

export default ({
  id
}) => {
  const photo = useSelector(state => state.app.photo);
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);

  async function mounted() {
    await dispatch(fetchPhoto(id, {}));

    setTimeout(function() {
      setLoaded(true)
    }, 1000);
  }

  useEffect(() => {
    mounted();
  }, [])

  return (
    <Choose>
      <When condition={loaded}>
        <Content>
          <ImageInfoCard photo={photo}/>
        </Content>
      </When>
      <Otherwise>
        <CircularProgress />
      </Otherwise>
    </Choose>
  );
}