import React from 'react';
import { Link } from 'react-router-dom';
import NavbarStyles from './Navbar.module.scss';
import { HomeIcon } from '../../icons';

interface NavbarProps {
    title: string;
}

export default function Navbar({ title }: NavbarProps) {
    return (
        <nav className={NavbarStyles.navbar}>
            <h1>{title}</h1>
            <div>
                <Link to="/">
                    <HomeIcon className={NavbarStyles.icon} />
                </Link>
            </div>
        </nav>
    );
}
