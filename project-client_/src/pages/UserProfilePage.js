import React from "react";
import { Button } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PopUp from "../components/ContactPage/PopUp";
import axios from 'axios';

const UserProfilePage = () => { 
    const [item, setItem] = useState([]); 
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const [formData2, setFromData] = useState({
        firstname: '',
        lastname: '',
        phoneNumber: '',
        email: '',
        address: '',
        city: '',
        country: '',
        postalCode: ''
    });

    const { firstname, lastname, phoneNumber, email, address, city, country, postalCode } = formData2;

    const onChange = (e) => {
        setFromData({ ...formData2, [e.target.name]: e.target.value });
    };

    //get
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    let id = decoded.user.id;
    console.log(decoded);
    console.log(id);
    useEffect(() => {
        sendGetRequest();

    }, []);

    const sendGetRequest = async () => {

        try {
        

            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
            };
            const response = await axios.get(
                'http://localhost:5001/api/customers/' + id,
                config
            );
            setItem(response.data);
            setFromData({ ...formData2, firstname: response.data.fName, lastname: response.data.lName, phoneNumber: response.data.phoneNumber, email: response.data.email, address: response.data.address, city : response.data.city, country : response.data.country, postalCode: response.data.postalCode });
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    //put
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("here");
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
        };
        const data = new FormData();

        data.append('firstname', firstname);
        data.append('lastname', lastname);
        data.append('phoneNumber', phoneNumber);
        data.append('email', email);

        data.append('address', address);
        data.append('city', city);
        data.append('country', country);
        data.append('postalCode', postalCode);

        const data1 = { 'id': id, 'firstname': firstname, 'lastname': lastname, 'phoneNumber': phoneNumber, 'email': email, 'address': address, 'city': city, 'country': country, 'postalCode': postalCode };

        try {
            const response = await axios.put(
                'http://localhost:5001/api/customers',
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
        <section className="user-profile">
            <div class="col-8">
                <h3 id = "myProfilebtn" class="mb-0">My Profile</h3>
            </div>
            <div className="user-profile-container">
                <form className="border border-dark" onSubmit={(e) => onSubmit(e)}>
                    <h5 className="heading-small text-muted mb-4">User Information</h5>
                    <div classname="pl-lg-4">
                        <div className="row">
                            <div class="col-lg-6">
                                <div class="form-group focused">
                        <label class="form-control-label" for="firstname">First name</label>
                                    <input type="text" name="firstname" id="input-first-name" class="form-control form-control-alternative" value={firstname} onChange={(e) => onChange(e)} required/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="lastname">Last name</label>
                                    <input type="text" id="lastname" name="lastname" class="form-control form-control-alternative" value={lastname} onChange={(e) => onChange(e)} required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="phoneNumber">Phone Number</label>
                                    <input type="text" id="phoneNumber" name="phoneNumber" class="form-control form-control-alternative" value={phoneNumber} onChange={(e) => onChange(e)} pattern="[0-9]{10}" placeholder="1234567899" required/> 
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="form-control-label" for="email">Email address</label>
                                    <input type="email" id="email" name="email" class="form-control form-control-alternative" value={email} onChange={(e) => onChange(e)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="heading-small text-muted mb-4">Contact Details</h5>
                    <div class="pl-lg-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="address">Address</label>
                                    <input type="text" id="address" name="address" class="form-control form-control-alternative" value={address} onChange={(e) => onChange(e)} required/>
                                
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="city">City</label>
                                    <input type="text" id="city" name="city" class="form-control form-control-alternative" value={city} onChange={(e) => onChange(e)} required/>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="country">Country</label>
                                    <input type="text" id="country" name="country" class="form-control form-control-alternative" value={country} onChange={(e) => onChange(e)} required/>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label class="form-control-label" for="postalCode">Postal code</label>
                                    <input type="text" id="postalCode" name="postalCode" class="form-control form-control-alternative" value={postalCode} onChange={(e) => onChange(e)} required/>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <input id="userProfileButton" variant = "primary" className="btn btn-primary" type="submit" value="Save" />
                </form>
            </div> 
            {isOpen && <PopUp
                content={<>
                    <p>Your profile has been updated.</p>
                    <button  className="btn btn-primary" onClick={() => { togglePopup(); }}>Close</button>
                </>}
                handleClose={togglePopup}
            />}
        </section>
    )
}
export default UserProfilePage;