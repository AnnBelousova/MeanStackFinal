import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const axios = require('axios');

const  MidMain = () => {
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
                
                <div class="text-left">
                    {/* <h2 className="section-heading text-uppercase">Our Products</h2>
                    <h3 className="section-subheading text-services" style={{fontSize: '20px'}}>Available online</h3> */}
                    { ReactHtmlParser(deals.html) }
                </div>
            
            </div>
        </section>
	)
};


export default MidMain;