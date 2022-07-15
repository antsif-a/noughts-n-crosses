import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, MoonIcon, SunIcon } from '@/components/icons';
import NavbarItem from '@/components/ui/NavbarItem';
import useTheme from '@/hooks/useTheme';
import ThemeType from '@/models/ThemeType';
import NavbarStyles from './Navbar.module.scss';

interface NavbarProps {
    title: string;
}

function Navbar({ title }: NavbarProps) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const getIconByTheme = (theme: ThemeType) => {
        switch (theme) {
            case ThemeType.light:
                return <SunIcon width={24} />;
            case ThemeType.dark:
                return <MoonIcon width={24} />;
        }
    }

    return (
        <nav className={NavbarStyles.navbar}>
            <h1>{title}</h1>
            <div>
                {/* TODO: Render navbar items based on props */}
                <NavbarItem
                    onClick={toggleTheme}
                    icon={getIconByTheme(theme)}
                />
                {pathname !== '/'
                    && <NavbarItem
                        onClick={() => navigate('/')}
                        icon={<HomeIcon width={24} />}
                    />
                }
            </div>
        </nav>
    );
}

export default Navbar;
