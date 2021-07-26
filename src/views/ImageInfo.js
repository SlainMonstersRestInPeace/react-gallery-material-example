import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ImageInfoCard from '../components/ImageInfoCard';

import { fetchPhoto } from '../redux/reducers/app';

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
        <ImageInfoCard photo={photo}/>
      </When>
      <Otherwise>
        <CircularProgress />
      </Otherwise>
    </Choose>

  );
}