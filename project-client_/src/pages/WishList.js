import React from "react";
import ItemsWishList from "../components/WishListPage/ItemsWishList";
import User from "../components/WishListPage/User";
import "../cssFiles/wishlist.css";

const WishList = () => {
	return(
	
		<div class="container padding-bottom-3x mb-2 text">
		<div class="row">
		<User/>
		<ItemsWishList/>
		</div>
		</div>

	)

}


export default WishList;