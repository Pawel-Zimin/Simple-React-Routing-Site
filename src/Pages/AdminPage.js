import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const AdminPage = () => {

    const permission = false;

    return (
        <Route render={() => (
            permission ? <h3>Hello user</h3> : <Redirect to='/login'/>
        )}/>
    );
}
 
export default AdminPage;