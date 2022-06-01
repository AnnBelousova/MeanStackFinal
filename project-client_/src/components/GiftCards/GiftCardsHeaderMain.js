import React from 'react';
import GiftCardsItemCards from './GiftCardsItemCards';
import { useState, useEffect } from 'react';
const axios = require('axios');

const GiftCardsHeaderMain = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        giftcardsFromDatabase();
    }, []);

    //Getting the giftcard images from the database
    const giftcardsFromDatabase = async () => {

        try {
            let token = localStorage.getItem("token");
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
            };
            const response = await axios.get(
                'http://localhost:5001/api/giftcards/',
                config
            );
            setItems(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>            
            <section className="giftcards">
                <h1>Shop Gift Cards</h1>
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {items.map((item) => {
                            return (
                                <GiftCardsItemCards img={item.img} title={item.title} price={item.price} item={item} />
                            )
                        })}
                    </div>
                </section>
            </section>
        </div>
    );
};

export default GiftCardsHeaderMain;