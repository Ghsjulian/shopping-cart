import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const messageRef = useRef(null);
    const btnRef = useRef(null);
    const [users, setUsers] = useState({
        user_name: null,
        user_email: null,
        user_password: null
    });
    const showMessage = (isTrue, text) => {
        if (isTrue) {
            messageRef.current.classList.remove("error");
            messageRef.current.classList.add("success");
            messageRef.current.textContent = text;
        } else {
            messageRef.current.classList.remove("success");
            messageRef.current.classList.add("error");
            messageRef.current.textContent = text;
        }
        setTimeout(() => {
            if (isTrue) {
                navigate("/");
            }
            messageRef.current.classList.remove("success");
            messageRef.current.classList.remove("error");
            messageRef.current.textContent = "";
        }, 3000);
    };
    const handleChange = event => {
        setUsers({ ...users, [event.target.name]: event.target.value });
    };
    const sendToServer = async users => {
        let url = "http://localhost:5000/api/signup";
        try {
            btnRef.current.textContent = "Please Wait...";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(users)
            });
            const responseData = await response.json();
            btnRef.current.textContent = "Signup";
            if (responseData.type) {
                showMessage(responseData.type, responseData.success);
            } else {
                showMessage(responseData.type, responseData.error);
            }
            console.log(responseData);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const submitUser = () => {
        if (!users.user_name && !users.user_email && !users.user_password) {
            showMessage(false, "All Fields Are Required !");
        } else if (!users.user_name) {
            showMessage(false, "User Name Is Required !");
        } else if (!users.user_email) {
            showMessage(false, "User Email Is Required !");
        } else if (!users.user_password) {
            showMessage(false, "User Password Is Required !");
        } else if (users.user_password.length < 6) {
            showMessage(false, "User Password Will Be At Least 8 Characters !");
        } else {
            sendToServer(users);
        }
    };
    return (
        <section data-aos="zoom-in" className="page one-page">
            <h2>Create An Account</h2>
            <div className="signup-form">
                <span ref={messageRef} id="message"></span>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Enter User Name"
                    onChange={handleChange}
                    value={users.user_name}
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Enter User Email"
                    onChange={handleChange}
                    value={users.user_email}
                />
                <input
                    type="password"
                    name="user_password"
                    placeholder="Enter User Password"
                    onChange={handleChange}
                    value={users.user_password}
                />
                <strong>Already Have An Account ? <NavLink to="/login">Login</NavLink></strong>
                <button ref={btnRef} className="submit" onClick={submitUser}>
                    Signup
                </button>
            </div>
        </section>
    );
};

export default Signup;
