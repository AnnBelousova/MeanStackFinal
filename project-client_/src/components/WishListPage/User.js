import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';



const User = () => {

	let token = localStorage.getItem('token');

	const [user, setUser] = useState([]);

	let config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };

	useEffect(() => {
		sendGetRequest();
	  }, []);

	const sendGetRequest = async () => {
		try{
			const response = await axios.get(
				'http://localhost:5001/api/auth',
				config);
			setUser(response.data);
			console.log(response);
		}catch (err) {
			console.log(err);
		}
	}


	return(
		<div class="col-lg-4">
		<aside class="user-info-wrapper">
			<div className="user-background">
			</div>
			<div class="user-info">
				<div class="user-avatar">
					<img src="/images/user-avatar.png" alt="UserImage"/></div>
				<div class="user-data">
				<h4>Client name:</h4>
				<h4>{user.fName}</h4>
				<h4>{user.lName}</h4>
				</div>
			</div>
		</aside>
	</div>
	)
}

export default User;
