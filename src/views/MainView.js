import React from 'react'

import {
  Switch, Route, useRouteMatch
} from 'react-router-dom'

import Header from '../components/Header'

import Gallery from './Gallery'
import About from './About'
import ImageInfo from './ImageInfo'




import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import { makeStyles } from '@material-ui/core/styles'

const ImgInfo = () => {
  const match = useRouteMatch();
  const id = match.params.id || 1;

  return (
    <ImageInfo id={id} />
  );
};

const useStyles = makeStyles({
  container: {
    marginTop: "16px"
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "150px",
    background: "red"
  }
})

export default () => {
  const classes = useStyles();

  return (
    <>
      <Header />

      <Container fixed className={classes.container}>
        {/* <Grid spacing={2} container direction="row">
          <Grid item  >
            <Box className={classes.item} />
          </Grid>
          <Grid item  >
            <Box className={classes.item} />
          </Grid>
          <Grid item  >
            <Box className={classes.item} />
          </Grid>
          <Grid item  >
            <Box className={classes.item} />
          </Grid>
          <Grid item  >
            <Box className={classes.item} />
          </Grid>
        </Grid> */}
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/image/:id" component={ImgInfo} />
        </Switch>
      </Container>
    </>
  );
}