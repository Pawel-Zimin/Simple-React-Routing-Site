import React from 'react';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import '../styles/Header.css';
import {Route, Switch} from 'react-router-dom';

const Header = () => {
	return (
		<>
			<Switch>
				<Route path='/' exact render={() => (
					<img src={img1} alt="city"/>
				)}/>
				<Route path='/products' render={() => (
					<img src={img2} alt="city"/>
				) }/>
				<Route path='/contact' render={() => (
					<img src={img3} alt="city"/>
				)}/>
				<Route path='/admin-panel' render={() => (
					<img src={img2} alt="city"/>
				)}/>
				<Route render={() => (
					<img src={img1} alt="city"/>
				)}/>
			</Switch>
		</>
	);
}
 
export default Header;