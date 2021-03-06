import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home.js';
import SOI from '../components/SOI.js';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/soi' component={ SOI }/>
  </Switch>
)
