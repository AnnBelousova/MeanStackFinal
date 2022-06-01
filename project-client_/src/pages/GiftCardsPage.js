import React from "react";
import GiftCardsHeaderMain from "../components/GiftCards/GiftCardsHeaderMain";
import { CartProvider } from "react-use-cart";
const GiftCardsPage = () => {

    return (

        <div>
            <CartProvider>
                <GiftCardsHeaderMain/>
            </CartProvider>

        </div>
    );
}

export default GiftCardsPage;