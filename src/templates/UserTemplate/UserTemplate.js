import React, { Fragment, useEffect } from 'react'
import { Route } from 'react-router';
import Header from './../HomeTemplate/Header/Header';
import Footer from './../HomeTemplate/Footer/Footer';

export default function UserTemplate(props) {
    const { Component, ...restRoute } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <Route {...restRoute} render={(propsRoute) => {

        return <Fragment>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </Fragment>
    }} />
}
