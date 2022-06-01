import React from "react";

const ServicesAbout = () => {
	return(
		<section className="page-services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-services" style={{fontSize: '20px'}}>Available online</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <img alt="InStock" className="img-service" src="/shopping-cart.png"/>
                        </span>
                        <h4 className="my-3">In Stock</h4>
                        <p className="text-services">When ordering online, we provide a 10% discount. Return of the product when fitting.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <img alt="InStock" className="img-service" src="/delivery-truck.png"/>
                        </span>
                        <h4 className="my-3">Free Delivery</h4>
                        <p className="text-services">We offer free shipping to make your shopping experience more enjoyable and affordable!</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                        <img alt="InStock" className="img-service" src="/sale.png"/>
                        </span>
                        <h4 className="my-3">Sale</h4>
                        <p className="text-services">Shop the sale online at our store and stock up on lots of great deals!</p>
                    </div>
                </div>
            </div>
        </section>
	)
}

export default ServicesAbout;