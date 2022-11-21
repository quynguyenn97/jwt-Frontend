import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Nav = (props) => {
    const { user } = useContext(UserContext);

    const [isShow, setIsShow] = useState(true);
    let location = useLocation();

    return (
        <>
            {isShow === true && (
                <div className="topnav">
                    <NavLink to="/" exact="true">
                        Home
                    </NavLink>
                    <NavLink to="/users">users</NavLink>
                    <NavLink to="/projects">projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            )}
        </>
    );
};

export default Nav;
