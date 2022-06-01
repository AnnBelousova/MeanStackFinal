import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const SectionAbout = () => {
	const navigate = useNavigate();
	const dateNow = moment().format('L'); 
	return(
		<section className="page-section">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase">About</h2>
				</div>
				<ul className="timeline">
					<li>
						<div className="timeline-image">
							<img className="rounded-circle img-fluid" src="/rocket.png" alt="..." />
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h4>2015</h4>
								<h4 className="subheading">Our start.</h4>
							</div>
							<div className="timeline-body">
								<p className="text-muted">We opened our first store. It was a small pavilion with a limited size range of clothes.</p>
							</div>
						</div>
					</li>
					<li className="timeline-inverted">
						<div className="timeline-image"><img className="rounded-circle img-fluid" src="/like.png" alt="..." /></div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h4>2017</h4>
								<h4 className="subheading">We are becoming popular!</h4>
							</div>
							<div className="timeline-body">
								<p className="text-muted">Our store has been gaining popularity and we are moving to a more spacious hall with several sections.</p>
							</div>
						</div>
					</li>
					<li>
						<div className="timeline-image">
							<img className="rounded-circle img-fluid-shopping" src="/online-shopping.png" alt="..." />
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h4>2020</h4>
								<h4 className="subheading">We are opening our online store.</h4>
							</div>
							<div className="timeline-body"><p className="text-muted">Orders from our customers are growing and we are opening our online store with free shipping.</p></div>
						</div>
					</li>
					<li className="timeline-inverted">
						<div className="timeline-image">
							<img className="rounded-circle img-fluid" src="/now.png" alt="..." />
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h4>{dateNow}</h4>
								<h4 className="subheading">We are opening a new store!</h4>
							</div>
							<div className="timeline-body"><p className="text-services">We are waiting for you in our new store!</p></div>
						</div>
					</li>
				</ul>
			</div>
			<button  className="btn btn-warning btn-xl text-uppercase" onClick={() => navigate('/contactus')}>Contact Us</button>
		</section>
	)
}


export default SectionAbout;