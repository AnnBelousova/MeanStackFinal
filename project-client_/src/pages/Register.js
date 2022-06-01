import "../cssFiles/registerApp.css";

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import decode from "jwt-decode";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFromData] = useState({
    fName: "",
    lName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    email: "",
    password: "",
  });
  const { fName, lName, address, city, country, postalCode, email, password } =
    formData;

  const onChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = {
      fName: fName,
      lName: lName,
      address: address,
      city: city,
      country: country,
      postalCode: postalCode,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5001/api/user",
        data,
        config
      );
      console.log(response);
      localStorage.setItem("token", response.data.token);
      console.log(decode(response.data.token));
      navigate("/browse");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="signup">
      <div className="formsignup">
        <form className="form" onSubmit={(e) => onSubmit(e)} id="signup">
          <div className="form__item">
            <label for="fName">First Name</label>
            <input
              type="text"
              className="input"
              name="fName"
              value={fName}
              onChange={(e) => onChange(e)}
              placeholder="John"
            />
            <span className="rule firstname-rule">Only letters</span>
            <span className="error">Name cannot be blank</span>
          </div>

          <div className="form__item">
            <label for="lName">Last Name</label>
            <input
              type="text"
              className="input"
              name="lName"
              value={lName}
              onChange={(e) => onChange(e)}
              placeholder="Smith"
            />
            <span className="rule firstname-rule">Only letters</span>
            <span className="error">Name cannot be blank</span>
          </div>

          <div className="form__item">
            <label for="email">Email</label>
            <input
              type="text"
              className="input"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="johnsmith@email.com"
            />
            <span className="rule email-rule">Valid email</span>
            <span className="error">Email cannot be blank</span>
          </div>

          <div className="form__item">
            <label for="address">Address</label>
            <input
              type="text"
              className="input"
              name="address"
              value={address}
              onChange={(e) => onChange(e)}
              placeholder="111 Larchmere Avenue"
            />

            <span className="error">Address cannot be blank</span>
          </div>

          <div className="form__item">
            <label for="city">City</label>
            <input
              type="text"
              className="input"
              name="city"
              value={city}
              onChange={(e) => onChange(e)}
              placeholder="Toronto"
            />

            <span className="error">City cannot be blank</span>
          </div>

          <div className="form__item">
            <label for="country">Country</label>
            <input
              type="text"
              className="input"
              name="country"
              value={country}
              onChange={(e) => onChange(e)}
              placeholder="Canada"
            />

            <span className="error">Country cannot be blank</span>
          </div>

          <div className="form__item">
            <label for="postalCode">Postal Code</label>
            <input
              type="text"
              className="input"
              name="postalCode"
              value={postalCode}
              onChange={(e) => onChange(e)}
              placeholder="M9L 2N7"
            />

            <span className="error">Postal Code cannot be blank</span>
          </div>

          <div className="form__item">
            <label for="password">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              placeholder="Password"
            />
            <span className="rule capital-rule">Capital letters</span>
            <span className="rule special-rule">Special characters</span>
            <span className="rule numbers-rule">Using numbers</span>
            <span className="rule char-rule">8+ characters</span>
            <span className="error">Password cannot be blank</span>
          </div>

          <div className="form__item">
            <label for="password-check">Password Check</label>
            <input
              type="password"
              className="input"
              name="password-check"
              placeholder="Password"
            />
            <span className="rule password-check-rule">Passwords match</span>
            <span className="error">Password cannot be blank</span>
          </div>
          <p className="message">
            Already registered? <Link to="/login">Sign In</Link>
          </p>
          <input className="submit" type="submit" value="SIGNUP" />
        </form>
      </div>

      <aside className="modal hide" id="modal"></aside>
    </div>
  );
};
