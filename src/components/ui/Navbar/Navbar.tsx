import React from 'react';
import NavbarItem from '../NavbarItem';
import NavbarStyles from './Navbar.module.scss';
import { HomeIcon } from '../../../icons';

interface NavbarProps {
    title: string;
}

function Navbar({ title }: NavbarProps) {
    return (
        <nav className={NavbarStyles.navbar}>
            <h1>{title}</h1>
            <div>
                <NavbarItem to="/" icon={<HomeIcon width={24} />} />
            </div>
        </nav>
    );
}

export default Navbar;
