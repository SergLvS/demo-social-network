import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return <header className={s.header}>
		<img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324' alt="Картинка пропала(" />
		<div className={s.loginBlock}>
			{props.isAuth
				? <div> { props.login} <button onClick={props.logout}>Log out</button> </div>
			: <NavLink to={'/login'}> Login </NavLink> }
		</div>
	</header >
}

export default Header;