import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const ItemsWishList = () => {
	const navigate = useNavigate();

	let token = localStorage.getItem('token');
	const [items, setItems] = useState([]);

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
				'http://localhost:5001/api/wishList/',
				config);
			setItems(response.data);
			console.log(response);
		}catch (err) {
			console.log(err);
		}
	}

	const onDelete = async (e) => {
		e.preventDefault();
		try{
			const response = await axios.delete('http://localhost:5001/api/wishList/');
			setItems([]);
			console.log(response);
		}catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="col-lg-8">
		<div className="padding-top-2x mt-2 hidden-lg-up"></div>
		<div className="table-responsive wishlist-table margin-bottom-none">
			<table class="table">
				<thead>
					<tr>
						<th className="text-uppercase title-text"><h2>Your Wish List</h2></th>
						<th className="text-center">
						<button  className="btn btn-warning btn-x1 text-uppercase" 
									  onClick={() => navigate('/additemtowishlist')}>
									  Add New Item To Wish List</button>
						</th>
						<th className="text-center">
						<button  className="btn btn-warning btn-x1 text-uppercase" 
									  onClick={(e) => onDelete(e)}>
									  Clear Wish List</button>
						</th>
					</tr>
				<p >{items.map((it) => <ItemWishList item={it} key={it._id} />)}</p>
				</thead>
			</table>
		</div>
	</div>
	)
};


const ItemWishList = ({item}) => {
	return (	
		<div className="row justify-content-center">

		<table className='table table-light table-hover m-0'>
			 <tbody>
					<tr>
						<td>
							<div>
								<div className="item-info">
									<p id="wlistname" className="text-uppercase">{item.name}</p>
									<p id="wlist"> Price :  {item.price}</p>
									<p id="wlist"> Quantity : {item.quantity}</p>		  
								</div>
							</div>
						</td>
					</tr>
				</tbody> 
			</table>
		</div>
	);
};



export default ItemsWishList;

