import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import ImageInfoCard from '../components/ImageInfoCard'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

import { fetchPhoto } from '../redux/reducers/app'

import { makeStyles } from '@material-ui/core/styles'

import useCancelToken from '../hooks/useCancelToken'

const useStyles = makeStyles({
  content: {
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
  },
  grid: {
    height: "200px",
  } 
})

export default ({
  id
}) => {
  const classes = useStyles();

  const photo = useSelector(state => state.app.photo);
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);

  const source = useCancelToken();

  async function mounted() {
    const cancelToken = source.token;
    const options = { cancelToken };

    await dispatch(fetchPhoto(id, options));

    setTimeout(function() {
      if (!source.isCancelled()) {
        setLoaded(true);
      }
    }, 1000);
  }

  useEffect(() => {
    mounted();

    return function () {
      source.cancel();
    }
  }, []);

  return (
    <Choose>
      <When condition={loaded}>
        <div className={classes.content}>
          <ImageInfoCard photo={photo}/>
        </div>
      </When>
      <Otherwise>
        <Grid container alignItems="center" justifyContent="center" direction="column" className={classes.grid}  >
          <CircularProgress />
        </Grid>
      </Otherwise>
    </Choose>
  );
}