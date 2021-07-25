import React from "react";
import { useState } from "react";

const Burger = () => {

    const [clicked, setClicked] = useState(false);
    const [firstTime, setFirstTime] = useState(false);

    function handleClick() {
        setClicked(true);
        if (firstTime === false) {
            setFirstTime(true);
        } else {
            setFirstTime(false);
        }
    }

    if (clicked === false) {
        return (
            <div className="burgerMenu">
                <button type="button" className="homeBtn" onClick={handleClick}>Home</button>
            </div>
        )
    } else {
        if (firstTime) {
            return (
                <div>
                    <div className="burgerMenu">
                        <button type="button" className="homeBtn" onClick={handleClick}>Home</button>
                    </div>
                    <div className="navItem">About</div>
                    <div className="navItem2">Blog</div>
                    <div className="navItem3">Contact</div>
                </div>
            )
        } else {
            return (
                <div className="burgerMenu">
                    <button type="button" className="homeBtn" onClick={handleClick}>Home</button>
                </div>
            )
        }

    }

}

export default Burger;