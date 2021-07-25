import React from 'react'

import {
  Switch, Route
} from 'react-router-dom'

import Header from '../components/Header'

import Gallery from './Gallery'
import About from './About'
import ImageInfo from './ImageInfo'

export default () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Gallery} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/image/:id" component={ImageInfo} />
      </Switch>
    </>
  );
}