import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ThreadDisplay from '../../ThreadDisplay/components/ThreadDisplay';
import CommentDisplay from '../../CommentDisplay/components/CommentDisplay';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <BrowserRouter basename="/innovation-board">
      <Switch>
        <Route path='/' component={ThreadDisplay} />
        <Route path='/post/undefined' component={ThreadDisplay} />
        <Route path='/post/:commentId' component={CommentDisplay} />
      </Switch>
    </BrowserRouter>
  </main>
)

export default Main;
