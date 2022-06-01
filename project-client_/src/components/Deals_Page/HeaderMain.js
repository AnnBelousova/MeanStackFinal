import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const axios = require('axios');



const  HeaderMain = () => {

    const [deals, setDeals] = useState([]); 

useEffect(() => {
    sendGetRequest();
  }, []);

const sendGetRequest = async () => {
    try {
      let token = localStorage.getItem("token");

      let config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
      const response = await axios.get(
        'http://localhost:5001/api/deal/',
        config
      );
      setDeals(response.data[0]);
      console.log(response.data[0].url);
    } catch (err) {
      console.log(err);
    }
  };

	return(
		<section className="page-services">
            <div className="container">
                <div className="text-center">
                  
                    <h1><img alt="InStock" className="icon-service" src={deals.url}/></h1>
                   
                </div>
                
            </div>
        </section>
	)
};


export default HeaderMain;
