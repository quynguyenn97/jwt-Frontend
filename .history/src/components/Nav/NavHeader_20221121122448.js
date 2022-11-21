import React, { useEffect, useState, useContext } from "react";
import "./Nav.scss";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import logo from "../../logo512.png";
import { logoutUser } from "../../services/userService";
import { toast } from "react-toastify";

const NavHeader = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const location = useLocation();
    const [isShow, setIsShow] = useState(true);
    const handleLogout = async () => {
        let data = await logoutUser();
        if (data && +data.EC === 0) {
            toast.success("Log out succeeds");
            navigate("/login");
        } else {
            toast.error(data.EM);
        }
    };
    if ((user && user.isAuthenticated === true) || location.pathname === "/") {
        return (
            <>
                <div className="nav-header">
                    <Navbar bg="header" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                    src={logo}
                                    alt="ok"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                                <span className="brand-name">React</span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink
                                        to="/"
                                        exact="true"
                                        className="nav-link">
                                        Home
                                    </NavLink>
                                    <NavLink to="/users" className="nav-link">
                                        Users
                                    </NavLink>
                                    <NavLink
                                        to="/projects"
                                        className="nav-link">
                                        Projects
                                    </NavLink>
                                    <NavLink to="/about" className="nav-link">
                                        About
                                    </NavLink>
                                </Nav>
                                <Nav>
                                    {user && user.isAuthenticated === true ? (
                                        <>
                                            <Nav.Item className="nav-link">
                                                Welcome {user.account.username}!
                                            </Nav.Item>
                                            <NavDropdown
                                                title="Settings"
                                                id="basic-nav-dropdown">
                                                <NavDropdown.Item>
                                                    Change Password
                                                </NavDropdown.Item>
                                                <NavDropdown.Item>
                                                    <span
                                                        onClick={() =>
                                                            handleLogout()
                                                        }>
                                                        Log out
                                                    </span>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </>
                                    ) : (
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    )}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        );
    } else {
        return <></>;
    }
};

export default NavHeader;
