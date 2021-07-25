import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../redux/reducers/app'

import PhotoCard from '../components/PhotoCard'
import { v4 as uuid } from 'uuid'

import CircularProgress from '@material-ui/core/CircularProgress'

export default () => {
  const photos = useSelector(state => state.app.photos);
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);

  async function getPhotos() {
    const url = 'https://jsonplaceholder.typicode.com/photos/';

    await dispatch(fetchPhotos(url, {}));

    setTimeout(function() {
      setLoaded(true);
    }, 1000);
  }

  function mounted() {
    getPhotos();
  }

  useEffect(() => {
    mounted();
  }, []);

  const items = loaded ? photos.slice(0, 10) : [];

  const photoElems = items.map(photo => {
    return (
      <PhotoCard key={uuid()} photo={photo}></PhotoCard>
    );
  })

  return (
    <Choose>
      <When condition={loaded}>
        {photoElems}
      </When>
      <Otherwise>
        <CircularProgress />
      </Otherwise>
    </Choose>
  )
}