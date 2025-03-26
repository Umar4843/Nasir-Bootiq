import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        setShow(false);
    };

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const menuItems = [
        { title: 'MEHNDI DRESS', path: '/mehndi' },
        { title: 'BRIDAL DRESS', path: '/bridal' },
        { title: 'Maxi & Frock', path: '/maxi&frock' },
        { title: 'Saree Dress', path: '/sareedress' },
    ];

    return (
        <div>
            <div className="topbox text-center py-2 bg-dark text-white">
                <h3 className="mb-0">
                    Get your festive Eid look sorted with our latest Fabrics Collection
                    <span className='mx-1'>right here.</span>
                </h3>
            </div>

            <Navbar expand="lg" className="navbar bg-body-tertiary">
                <Navbar.Brand href="/">
                    <img
                        src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwb33579b0/images/logo/logo.svg"
                        alt="logo"
                        className='Nav-logo' 
                    />
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={handleToggle} 
                    className="navbar-toggler"
                />
                <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
                    <Nav className="mx-auto navbar-nav">
                        {menuItems.map((item, index) => (
                            <Nav.Link 
                                key={index} 
                                as={NavLink} 
                                to={item.path} 
                                className="menu-item"
                            >
                                {item.title}
                            </Nav.Link>
                        ))}

                        <div className="d-flex gap-3 ms-5">
                            <Nav.Link className="icon-link">
                                <FaSearch className="icon" />
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="#" className="icon-link" onClick={handleShow}>
                                <FaUser className="icon" />
                            </Nav.Link>
                            <Nav.Link className="icon-link">
                                <FaShoppingCart className="icon" />
                            </Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Sign-In Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-between align-items-center">
                            <a href="#">Forgot password?</a>
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Header;
