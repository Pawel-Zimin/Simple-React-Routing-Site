import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ProductsPage from '../Pages/ProductsPage';
import ProductsListPage from '../Pages/ProductsListPage';
import ContactPage from '../Pages/ContactPage';
import AdminPage from '../Pages/AdminPage';
import LoginPage from '../Pages/LoginPage';
import ErrorPage from '../Pages/ErrorPage';

const Page = () => {
	return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/products' exact component={ProductsListPage}/>
            <Route path='/products/:id' component={ProductsPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/admin-panel' component={AdminPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route component={ErrorPage}/>
        </Switch>
	);
}
 
export default Page;