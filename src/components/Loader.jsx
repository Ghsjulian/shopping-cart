import React from "react";

const Loader = ({text}) => {
    return (
        <div className="fetch">
            <img src="/icons/loading2.gif" />
            <h3>{text.msg}</h3>
        </div>
    );
};

export default Loader;
