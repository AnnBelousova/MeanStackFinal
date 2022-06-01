import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const ItemsWishList = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		sendGetRequest();
	  }, []);

	const sendGetRequest = async () => {
		try{
			const response = await axios.get('http://localhost:5001/api/items/')
			setItems(response.data);
			console.log(response);
		}catch (err) {
			console.log(err);
		}
	}

	return (
    <div>
      <h2 className="text-uppercase">Product List</h2>
        <section className='py-4 container'>
            <div className="row justify-content-center">
            <div className="col-12">
            <div className="table-responsive wishlist-table margin-bottom-none">
              <table class="table">
                <thead>
                  <tr>
                    {items.map((it) => <ItemWishList item={it} key={it._id} />)}
                  </tr>
                </thead>
              </table>
            </div>
             </div>
            </div>
        </section>
    </div>
	)
};


const ItemWishList = ({item}) => {
  const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: item.name,
		price: item.price,
		quantity: "",
	  });
	
	  const { name, price, quantity } = formData;
	  const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	
	  const onSubmit = async (e) => {
		e.preventDefault();
    	navigate('/wishlist');
		
	  let token = localStorage.getItem('token');
		let config = {
		  headers: {
			'Content-Type': 'application/json',
			'x-auth-token': token,
		  },
		};
	
		let data = {
		  name,
		  price,
		  quantity,
		};
		try {
		  const response = await axios.post(
			'http://localhost:5001/api/wishList',
			data,
			config
		  );
		  console.log('item added');
		} catch (e) {
		  console.log(e.response.data.errors);
		}
	  };

	return (
		<section >
		<div >
		<table className='table table-light table-hover m-0'>
    <tbody>
					<tr >
						<td>
					<form class="formwish" id="addtowish" onSubmit={(e) => onSubmit(e)}>
		                <label>Item name:</label> 
                        <input
                        type='text'
                        placeholder='name'
                        name='name'
                        value={item.name}
                        onChange={(e) => onChange(e)}
                        required
                        disabled 
                        />

                   <label>Price: </label>
		
                        <input
                        type='text'
                        placeholder='price'
                        name='price'
                        value={item.price}
                        onChange={(e) => onChange(e)}
                        disabled
                        />
 
		 
                  <label>Quantity: </label>
                      <input
                      type='text'
                      placeholder='please add quantity'
                      name='quantity'
                      value={quantity}
                      required
                      onChange={(e) => onChange(e)}
                      />
	   
		             <input class="btn btn-warning" id="input" type='submit' value='Add Item' /> 
	        </form>
					</td>
					</tr>
        </tbody>
		</table>
		 </div>

    </section> 
	);
};

export default ItemsWishList;

