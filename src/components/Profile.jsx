import React from "react";
import ghs from "../assets/img/ghs_10.png";

const Profile = () => {
        document.title = "User Profile | Shopping Cart";
    return (
        <section data-aos="zoom-in" className="page" id="products">
            <div className="profile">
                <button id="edit">
                    <i className="bx bxs-edit"></i>
                </button>
                <img id="user-img" src={ghs} alt="User Profile Image" />
                <h2>Ghs Julian</h2>
                <h3>ghsjulian@gmail.com</h3>
                <div className="btn-area">
                    <h4>
                        Cart<span>5</span>
                    </h4>
                    <h4>
                        Orders<span>3</span>
                    </h4>
                    <h4>
                        Notifications<span>7</span>
                    </h4>
                </div>
            </div>
        </section>
    );
};

export default Profile;
