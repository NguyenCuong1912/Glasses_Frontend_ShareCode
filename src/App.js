import React from 'react'
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import { _account, _add, _admin, _edit, _home, _login, _register } from './utils/util/ConfigPath';
import Home from './pages/Client/Home/Home';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import QuanLyAccount from './pages/Admin/Account/QuanLyAccount';
import AddAccount from './pages/Admin/Account/AddAccount';
import EditAccount from './pages/Admin/Account/EditAccount';



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={_home} exact Component={Home} />


        <UserTemplate path={_login} exact Component={Login} />
        <UserTemplate path={_register} exact Component={Register} />

        <AdminTemplate path={`${_admin}${_account}`} exact Component={QuanLyAccount} />
        <AdminTemplate path={`${_admin}${_account}${_add}`} exact Component={AddAccount} />
        <AdminTemplate path={`${_admin}${_account}${_edit}/:id`} exact Component={EditAccount} />



      </Switch>
    </Router>
  )
}
