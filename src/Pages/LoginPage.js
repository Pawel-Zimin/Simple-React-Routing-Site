import React from 'react';
import { createFactory } from 'react';

const LoginPage = () => {
    return (
        <div>
            <label htmlFor="">Login: <input style={{display:'block'}} type="text"/></label>
            <label htmlFor="">Password: <input style={{display:'block'}} type="password"/></label>
            <button style={{marginTop: 6, display: 'block'}}>Log in</button>
        </div>
    );
}
 
export default LoginPage;