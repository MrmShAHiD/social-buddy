import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/posts">
          <Home/>
        </Route>
        <Route path="/post/:id">
          <PostDetails/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route>
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
