import React from 'react';
import { useCart } from "react-use-cart";



const Itemcard = (props) => {
    const { addItem } = useCart();

    return (
        <div className='col-11 col-md-3 col-lg3 mx-0 mb-4'>
        <div class="card p-3 overflow-hidden h-100 shadow">
    <img src={props.img} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <h5 class="card-text">$ {props.price}</h5>
    <h5 class="card-text">{props.desc}</h5>
    <button class="btn btn-warning"
     onClick={() => addItem(props.item)}>Add to Cart</button>
  </div>
</div>
            
        </div>
    );
};

export default Itemcard;