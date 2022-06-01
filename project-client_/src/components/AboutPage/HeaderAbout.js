import React from 'react'
import { useNavigate } from 'react-router-dom';

const  HeaderAbout = () => {
	const navigate = useNavigate();
	return(
		<div>
		<header className="aboutheader">
		<div className="container">
			<div className="aboutheader-heading text-uppercase">Welcome To Our Store!</div>
			<button  className="btn btn-warning btn-xl text-uppercase" onClick={() => navigate('/register')}>Tell Us About You</button>
		</div>
	</header>
		</div>
	)
};


export default HeaderAbout;
