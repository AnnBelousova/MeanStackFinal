import React from 'react';
import { useCart } from "react-use-cart";

const GiftCardsItemCards = (props) => {
    const { addItem } = useCart();

    return (
        <div className='col-md-4'>
            <div className="image-container">
                <img src={props.img} alt="Birthday-gift-card-image" />
                <b>${props.price}</b>
            </div>

            <button onClick={() => addItem(props.item)} className="btn_giftCard">Get your gift card</button>
        </div>
    );
};

export default GiftCardsItemCards;