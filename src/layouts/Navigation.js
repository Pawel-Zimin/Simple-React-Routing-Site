import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
   {name: 'start', exact: true, path: '/'},
   {name: 'products', path: '/products'},
   {name: 'contact', path: '/contact'},
   {name: 'admin-panel', path: '/admin-panel'},
]

const Navigation = () => {

   const menu = list.map(item => (
      <li key={item.name}>
         <NavLink to={item.path} exact={item.exact}>{item.name}</NavLink>
      </li>
   ))

   return (
		<div>
			<nav>
            <ul>
               {menu}
            </ul>
         </nav>
		</div>
	);
}
 
export default Navigation;