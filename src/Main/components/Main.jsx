import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import ThreadDisplay from '../../ThreadDisplay/components/ThreadDisplay';
import CommentDisplay from '../../CommentDisplay/components/CommentDisplay';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ThreadDisplay} />
      <Route exact path='/post/undefined' render={() => (<Redirect to='/' />)} />
      <Route path='/post/:commentId' component={CommentDisplay} />
    </Switch>
  </main>
)

export default Main;
