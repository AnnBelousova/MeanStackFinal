import React from "react";
import Home from "../components/Main_page/HeaderMain";
import { CartProvider } from "react-use-cart";
import Cart from "./Cart";
import Pagination from 'react-bootstrap/Pagination'

const MainPage = () => {

return (
	
	<div>
		<CartProvider>
		<Home/>
		<Cart/>
		</CartProvider>
		
	</div>
	);
}

export default MainPage;