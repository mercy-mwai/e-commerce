import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const title ="Login";
const socialTitle ="Login With Social Media";
const btnText ="Login Now"

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];
const Login = () => {
const [errorMessage, setErrorMessage] = useState(" ");
const {signInWithGmail, login} =useContext(AuthContext);
const location =useLocation();
const navigate= useNavigate();

const from= location.state?.from?.pathname || "/";

const handleLogin=(e)=>{

}
  return(
    <div>
        <div className="login-section padding-tb section-bg">
            <div className="container">
                <div className="account-wrapper">
                    <h3 className="title">{title}</h3>
                    <form className="account-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <input type="email" name="email" id="email" placeholder="Email Address *" required />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id="password" placeholder="Password *" required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Login;
