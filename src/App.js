import React from 'react'
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import { _home } from './utils/util/ConfigPath';
import Home from './pages/Client/Home/Home';


export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={_home} exact Component={Home} />
      </Switch>
    </Router>
  )
}
