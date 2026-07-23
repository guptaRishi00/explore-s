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
                <Link to="/about">About</Link>
            </li>
            <li className={location.pathname === '/services' ? 'menu-active' : ''}>
                <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === '/become-a-partner' ? 'menu-active' : ''}>
                <Link to="/become-a-partner">Become a Partner</Link>
            </li>
            <li className={location.pathname === '/career' ? 'menu-active' : ''}>
                <Link to="/career">Career</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'menu-active' : ''}>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li className={location.pathname === '/blogs' ? 'menu-active' : ''}>
                <Link to="/blogs">Blogs</Link>
            </li>
        </>
    );
}

export default MenuItems;
