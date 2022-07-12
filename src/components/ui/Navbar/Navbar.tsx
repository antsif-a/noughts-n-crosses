import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarItem from '../NavbarItem';
import NavbarStyles from './Navbar.module.scss';
import { HomeIcon } from '../../../icons';

interface NavbarProps {
    title: string;
}

function Navbar({ title }: NavbarProps) {
    const location = useLocation();

    return (
        <nav className={NavbarStyles.navbar}>
            <h1>{title}</h1>
            <div>
                {location.pathname !== '/' && <NavbarItem to="/" icon={<HomeIcon width={24} />} />}
            </div>
        </nav>
    );
}

export default Navbar;
