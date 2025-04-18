import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaSearch, FaShoppingCart, FaUser, FaTimes } from 'react-icons/fa';
import './Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const menuItems = [
        { title: 'Mehndi Dress', path: '/mehndi' },
        { title: 'Bridal Dress', path: '/bridal' },
        { title: 'Maxi & Frock', path: '/maxi&frock' },
        { title: 'Saree Dress', path: '/sareedress' },
    ];

    return (
        <>
            <div className="topbox text-center py-2 bg-dark text-white">
                <h3 className="mb-0">
                    Get your festive Eid look sorted with our latest Fabrics Collection
                    <span className='mx-1'>right here.</span>
                </h3>
            </div>

            <Navbar expand="lg" className="navbar bg-white shadow-sm px-3">
                <Navbar.Brand href="/">
                    <img
                        src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwb33579b0/images/logo/logo.svg"
                        alt="logo"
                        className='Nav-logo'
                    />
                </Navbar.Brand>

                {/* MOBILE: Hamburger Menu Button */}
                <div className="d-lg-none">
                    <Navbar.Toggle
                        aria-controls="offcanvasNavbar"
                        onClick={handleShow}
                        className="border-0"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                </div>

                {/* DESKTOP: Standard Nav */}
                <div className="d-none d-lg-flex w-100 justify-content-between">
                    <Nav className="mx-auto">
                        {menuItems.map((item, index) => (
                            <Nav.Link
                                key={index}
                                as={NavLink}
                                to={item.path}
                                className="menu-item px-3"
                            >
                                {item.title}
                            </Nav.Link>
                        ))}
                    </Nav>

                    <div className="d-flex gap-3 align-items-center">
                        <Nav.Link className="icon-link">
                            <FaSearch />
                        </Nav.Link>
                        <Link className="icon-link" to="/signup">
                            <FaUser />
                        </Link>
                        <Nav.Link className="icon-link">
                            <FaShoppingCart />
                        </Nav.Link>
                    </div>
                </div>

                {/* MOBILE: Offcanvas Drawer */}
                <Offcanvas
                    show={show}
                    onHide={handleClose}
                    placement="start"
                    className="custom-offcanvas d-lg-none"
                >
                    <Offcanvas.Header className="border-bottom d-flex align-items-center">
                        <Offcanvas.Title className="fs-4">
                            <a href="/" className="logo-link">
                                <img
                                    src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwb33579b0/images/logo/logo.svg"
                                    alt="Logo"
                                    style={{ height: "50px", marginTop: "20px" }}  // Adjust marginTop to move the logo down
                                />
                            </a>
                        </Offcanvas.Title>

                        <FaTimes onClick={handleClose} className="close-btn ms-auto pointer-cursor" />

                    </Offcanvas.Header>


                    <Offcanvas.Body>
                        <div className="drawer-menu">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="drawer-link"
                                    onClick={handleClose}
                                >
                                    {item.title}
                                </Link>
                            ))}

                            <div className="drawer-icons mt-4 pt-3 border-top">
                                <Link className="icon-link" to="#" onClick={handleClose}>
                                    <FaSearch />
                                </Link>
                                <Link className="icon-link" to="/signup" onClick={handleClose}>
                                    <FaUser />
                                </Link>
                                <Link className="icon-link" to="#" onClick={handleClose}>
                                    <FaShoppingCart />
                                </Link>
                            </div>
                        </div>
                    </Offcanvas.Body>

                </Offcanvas>
            </Navbar>
        </>
    );
};

export default Header;
