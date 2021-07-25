import React from "react";
import Burger from "./Burger";
import RightNav from "./RightNav";

const Navbar = () => {
    return (
        <div className="navbar">
            <Burger />
            <RightNav />
        </div>
    )
}

export default Navbar;