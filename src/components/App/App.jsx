import React from 'react';

import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Feeling from './Feeling';
import Review from './Review';
import Understanding from './Understanding';
import Support from './Support';
import Comment from './Comments';
import Reset from './Reset';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route exact path='/'>
        <Feeling />
      </Route>
      <Route exact path='/understanding'>
        <Understanding />
      </Route>
      <Route exact path='/review'>
        <Review />
      </Route>
      <Route exact path='/support'>
        <Support />
      </Route>
      <Route exact path='/comment'>
        <Comment />
      </Route>
      <Route exact path='/success'>
        <Reset />
      </Route>
    </div>
    </Router>
  );
}

export default App;
