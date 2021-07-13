import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import { SearchResults } from './components/SearchResults';

const Home = React.lazy(() => import("./components/Home"))
const MovieDetail = React.lazy(() => import("./components/MovieDetail"))



function App() {

  return (
    <Router>
      <Nav/>
      <Suspense fallback={
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      }>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/movie/:id" component={MovieDetail}/>
          <Route path="/search" component={SearchResults}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
