import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, MoonIcon, SunIcon } from '@/components/icons';
import NavbarItem from '@/components/ui/NavbarItem';
import useTheme from '@/hooks/useTheme';
import useThemeClassName from '@/hooks/useThemeClassName';
import ThemeType from '@/models/ThemeType';
import NavbarStyles from './Navbar.module.scss';

function getIconByTheme(theme: ThemeType) {
    switch (theme) {
        case ThemeType.light:
            return <SunIcon width={24} />;
        case ThemeType.dark:
            return <MoonIcon width={24} />;
        default:
            return '';
    }
}

interface NavbarProps {
    title: string;
}

export default function Navbar({ title }: NavbarProps) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={useThemeClassName(NavbarStyles.navbar)}>
            <h1 className={useThemeClassName(NavbarStyles.title)}>{title}</h1>
            <div>
                {/* TODO: Render navbar items based on props */}
                <NavbarItem
                    onClick={toggleTheme}
                    icon={getIconByTheme(theme)}
                />
                {pathname !== '/' && (
                    <NavbarItem
                        onClick={() => navigate('/')}
                        icon={<HomeIcon width={24} />}
                    />
                )}
            </div>
        </nav>
    );
}
