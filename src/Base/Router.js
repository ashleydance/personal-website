import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../scss/base.css'

// Pages
import Home from '../Pages/Home'
import About from '../Pages/About'
import SingleBlog from '../Pages/SingleBlog'
import { NotFound } from '../Pages/NotFound'

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/blog/:slug' component={SingleBlog} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
