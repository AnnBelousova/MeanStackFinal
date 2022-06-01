import React from 'react';
import Itemcard from './Itemcard';
import data from "./data";
import Pagination from "./pagination";
import { useState, useEffect } from 'react';
const axios = require('axios');

const Home = () => {
    const [items, setItems] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const indexOflast = currentPage * postsPerPage;
    const indexOffirst = indexOflast - postsPerPage;
    const currentPosts = items.slice(indexOffirst,indexOflast)

    const paginate = pageNumber => setCurrentPage(pageNumber);

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
            'http://localhost:5001/api/items/',
            config
          );
          setItems(response.data);
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };
  
  
 
   
    // console.log(currentPage);

    return (
        <div>
            <br></br>
        
                    <h2 className="section-heading text-uppercase">Our Products</h2>
                    <h3 className="section-subheading text-services" style={{fontSize: '20px'}}>Available online</h3>
                
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {currentPosts.map((item, index)=> {
                        return(
                          
                            <Itemcard img={item.img} title={item.name} desc="" price={item.price} item={item} key={index}/>
                           
                        )
                      
                    })
                    } 
                    <div class="d-flex justify-content-center"><Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}/></div>
                    
                   
                </div>
            </section>
        </div>
    );
};

export default Home;