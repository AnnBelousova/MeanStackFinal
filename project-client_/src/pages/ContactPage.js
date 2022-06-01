import React from "react";
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PopUp from "../components/ContactPage/PopUp";


const ContactPage = () => {
    const [formData2, setFromData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
    });

    const { firstname, lastname, email, message } = formData2;

    const onChange = (e) => {
        setFromData({ ...formData2, [e.target.name]: e.target.value });
    };

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        let config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('token')
            },
        };
        const data = new FormData();
        data.append('firstname', firstname);
        data.append('lastname', lastname);
        data.append('email', email);
        data.append('message', message);

        const data1 = { 'firstname': firstname, 'lastname': lastname, 'email': email, 'message': message };

        try {
            const response = await axios.post(
                'http://localhost:5001/api/contacts',
                data1,
                config
            );

            console.log(response);
            togglePopup();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className="contact-us-details">
                <div>
                    <h3>Send Us A Message</h3>
                    <form className="contact-us-form" onSubmit={(e) => onSubmit(e)}>
                        <div>
                            <label for="firstname">First name</label>
                            <span class="required">*</span>
                            <input
                                className="form-text"
                                type='text'
                                placeholder='Enter your first name'
                                name='firstname'
                                required
                                value={firstname}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div>
                            <label for="lastname">Lastname</label>
                            <span class="required">*</span>
                            <input
                                className="form-text"
                                type='text'
                                placeholder='Enter your last name'
                                name='lastname'
                                required
                                value={lastname}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <span class="required">*</span>
                            <input
                                className="form-text"
                                type='email'
                                placeholder='Enter your email address'
                                required
                                name='email'
                                value={email}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div>
                            <label for="message">Message</label>
                            <span class="required">*</span>
                            <input
                                className="message-box"
                                type='textarea'
                                placeholder='Leave us a message here'
                                name='message'
                                required
                                value={message}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <input id="contact-btn" className="btn btn-primary" type="submit" value="Submit"/>
                    </form>
                </div>

                <div id="contactDetailsDiv">
                    <h3>Other ways to contact us</h3>
                    <h5>Email us</h5>
                    <p><a href="mailto:abc@email.com">abc@email.ca</a></p>
                    <h5>Connect with us</h5>
                    <div className='col item social'>
                        <a href='https://www.facebook.com/login.php/' target="_blank">
                            <i className='icon ion-social-facebook'></i>
                        </a>
                        <a href='https://twitter.com/' target="_blank">
                            <i className='icon ion-social-twitter'></i>
                        </a>
                        <a href='https://www.google.com/account/about/' target="_blank">
                            <i className="icon ion-social-google"></i>
                        </a>
                        <a href='https://www.google.com/account/about/' target="_blank">
                            <i className='icon ion-social-instagram'></i>
                        </a>
                        <a href='https://www.linkedin.com/' target="_blank">
                            <i className="icon ion-social-linkedin"></i>
                        </a>
                        <a href='https://www.youtube.com/' target="_blank">
                            <i className="icon ion-social-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            {isOpen && <PopUp
                content={<>
                    <p>Your message has been received.</p>
                    <button className= "btn btn-primary" onClick={() => { togglePopup(); } }>Close</button>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    )
}
export default ContactPage;