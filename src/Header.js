import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <Navbar />
            <div className="headingDiv">
                <p>Plan Your</p>
                <p>Friday evening</p>
            </div>
            <div className="scrollBtnDiv">
                <div className="scrollBtn"></div>
            </div>
            <div className="scroll">Scroll Down</div>
        </header>
    )
}

export default Header;