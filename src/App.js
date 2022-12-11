import React from 'react'
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import { _account, _add, _admin, _anna, _bill, _cart, _cate, _detail, _edit, _home, _login, _product, _register } from './utils/util/ConfigPath';
import Home from './pages/Client/Home/Home';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import QuanLyAccount from './pages/Admin/Account/QuanLyAccount';
import AddAccount from './pages/Admin/Account/AddAccount';
import EditAccount from './pages/Admin/Account/EditAccount';
import AccountTemplate from './templates/AccountTemplate/AccountTemplate';
import DetailAccount from './pages/Client/Account/DetailAccount';
import UpdateAccount from './pages/Client/Account/UpdateAccount';
import QuanLyCategory from './pages/Admin/Category/QuanLyCategory';
import AddCategory from './pages/Admin/Category/AddCategory';
import UpdateCategory from './pages/Admin/Category/UpdateCategory';
import QuanLyProduct from './pages/Admin/Product/QuanLyProduct';
import AddProduct from './pages/Admin/Product/AddProduct';
import UpdateProduct from './pages/Admin/Product/UpdateProduct';
import Cart from './pages/Client/Cart/Cart';
import QuanLyBill from './pages/Admin/Bill/QuanLyBill';
import DetailBill from './pages/Admin/Bill/DetailBill';
import ProductDetail from './pages/Client/Product/ProductDetail';
import Anna from './pages/Client/Anna/Anna';
import ProductList from './pages/Client/Product/ProductList';



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={_home} exact Component={Home} />
        <HomeTemplate path={`${_product}/:id`} exact Component={ProductList} />
        <HomeTemplate path={_anna} exact Component={Anna} />
        <HomeTemplate path={_cart} exact Component={Cart} />
        <HomeTemplate path={`${_detail}/:id`} exact Component={ProductDetail} />


        <AccountTemplate path={`${_account}`} exact Component={DetailAccount} />
        <AccountTemplate path={`${_account}${_edit}`} exact Component={UpdateAccount} />



        <UserTemplate path={_login} exact Component={Login} />
        <UserTemplate path={_register} exact Component={Register} />

        <AdminTemplate path={`${_admin}${_account}`} exact Component={QuanLyAccount} />
        <AdminTemplate path={`${_admin}${_account}${_add}`} exact Component={AddAccount} />
        <AdminTemplate path={`${_admin}${_account}${_edit}/:id`} exact Component={EditAccount} />


        <AdminTemplate path={`${_admin}${_cate}`} exact Component={QuanLyCategory} />
        <AdminTemplate path={`${_admin}${_cate}${_add}`} exact Component={AddCategory} />
        <AdminTemplate path={`${_admin}${_cate}${_edit}/:id`} exact Component={UpdateCategory} />

        <AdminTemplate path={`${_admin}${_product}`} exact Component={QuanLyProduct} />
        <AdminTemplate path={`${_admin}${_product}${_add}`} exact Component={AddProduct} />
        <AdminTemplate path={`${_admin}${_product}${_edit}/:id`} exact Component={UpdateProduct} />

        <AdminTemplate path={`${_admin}${_bill}`} exact Component={QuanLyBill} />
        <AdminTemplate path={`${_admin}${_bill}${_detail}/:id`} exact Component={DetailBill} />



      </Switch>
    </Router>
  )
}
