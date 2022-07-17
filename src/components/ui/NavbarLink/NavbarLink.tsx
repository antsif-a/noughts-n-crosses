import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import useThemeClassName from '@/hooks/useThemeClassName';
import NavbarLinkStyles from './NavbarLink.module.scss';

interface NavbarLinkProps {
    children: ReactNode | null;
    to: string;
}

export default function NavbarLink({ to, children }: NavbarLinkProps) {
    return (
        <NavLink className={useThemeClassName(NavbarLinkStyles.link)} to={to}>
            {children}
        </NavLink>
    );
}
