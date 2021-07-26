import React from 'react'

import {
  Switch, Route, useRouteMatch
} from 'react-router-dom'

import Header from '../components/Header'

import Gallery from './Gallery'
import About from './About'
import ImageInfo from './ImageInfo'

import Container from '@material-ui/core/Container'

const ImgInfo = () => {
  const match = useRouteMatch();
  const id = match.params.id || 1;

  return (
    <ImageInfo id={id} />
  );
};

export default () => {
  return (
    <>
      <Header />
      <Container fixed>
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