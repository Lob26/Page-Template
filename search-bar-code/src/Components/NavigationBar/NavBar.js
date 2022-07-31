import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavItems';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={require('../../images/logo.svg')} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        Acerca de
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contactanos
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;