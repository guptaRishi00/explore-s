import React from 'react';
import { Link, useLocation } from 'react-router-dom';
 
const MenuItems = (props) => {
    
    const { parentMenu } = props;

    const location = useLocation();

    return (
        <>
            <li className={location.pathname === "/" ? 'menu-active' : ''}>
                <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/about' ? 'menu-active' : ''}>
                <Link to="/about">About us</Link>
            </li>
            <li className={location.pathname === '/services' ? 'menu-active' : ''}>
                <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === '/domain' ? 'menu-active' : ''}>
                <Link to="/domain">Our Domain</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'menu-active' : ''}>
                <Link to="/contact">Contact Us</Link>
            </li>
        </>
    );
}

export default MenuItems;