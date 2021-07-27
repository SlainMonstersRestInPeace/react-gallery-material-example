import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../redux/reducers/app'

import PhotoCategory from '../components/PhotoCategory'
import { v4 as uuid } from 'uuid'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  content: {
    "& .gallery": {
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
  },
  grid: {
    height: "800px"
  }
});

export default () => {
  const classes = useStyles();

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

  const items = loaded ? photos : [];

  const categories = [];

  const MAX_CATEGORIES = 4;
  const CATEGORY_MAX = 6;

  for (let i = 0; i < MAX_CATEGORIES; i++) {
    const idx = i*CATEGORY_MAX;

    const category = items.slice(idx, idx + CATEGORY_MAX);

    if (category.length > 0) {
      categories.push(category);
    }
  }

  const categoryList = categories.map((category, idx) => {
    return (
      <PhotoCategory key={uuid()} photos={category} label={`Category ${idx + 1}`}/>
    );
  });

  return (
    <Choose>
      <When condition={loaded}>
        <div className={classes.content}>
          <div className="gallery">
            {categoryList}
          </div>
        </div>
      </When>
      <Otherwise>
        <Grid container alignItems="center" justifyContent="center" direction="column" className={classes.grid}  >
          <CircularProgress />
        </Grid>
      </Otherwise>
    </Choose>
  )
}