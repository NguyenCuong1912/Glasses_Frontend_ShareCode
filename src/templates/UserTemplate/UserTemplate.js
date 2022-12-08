import React, { Fragment } from 'react'
import { Route } from 'react-router';
import Header from './../HomeTemplate/Header/Header';
import Footer from './../HomeTemplate/Footer/Footer';

export default function UserTemplate(props) {
    const { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {

        return <Fragment>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </Fragment>
    }} />
}
