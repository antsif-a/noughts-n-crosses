import React, { ReactNode } from 'react';
import NavbarButton from '@/components/ui/NavbarButton';
import NavbarLink from '@/components/ui/NavbarLink';
import useThemeClassName from '@/hooks/useThemeClassName';
import NavbarStyles from './Navbar.module.scss';

interface NavbarItem {
    content: ReactNode | null;
    onClick?: () => void;
    to?: string;
}

interface NavbarProps {
    title: string;
    items: NavbarItem[];
}

function renderItems(items: NavbarItem[]) {
    return items.map((item) => {
        if (item.onClick) {
            return <NavbarButton onClick={item.onClick}>{item.content}</NavbarButton>;
        }

        if (item.to) {
            return <NavbarLink to={item.to}>{item.content}</NavbarLink>;
        }

        throw new Error('Navbar item must have either "onClick" or "to" property');
    });
}

export default function Navbar({ title, items }: NavbarProps) {
    return (
        <nav className={useThemeClassName(NavbarStyles.navbar)}>
            <h1 className={useThemeClassName(NavbarStyles.title)}>{title}</h1>
            <div>
                {renderItems(items)}
            </div>
        </nav>
    );
}
