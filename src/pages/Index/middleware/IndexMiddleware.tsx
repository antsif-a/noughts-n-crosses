import React, { useEffect, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HomeIcon, MoonIcon, PlayIcon, SunIcon } from '@/components/icons';
import Navbar from '@/components/ui/Navbar';
import ThemeContext from '@/context/theme';
import useThemeContext from '@/hooks/useThemeContext';
import ThemeType from '@/models/ThemeType';
import './IndexMiddleware.module.scss';

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

export default function IndexMiddleware() {
    const themeContext = useThemeContext();
    const [theme, setTheme] = useState(themeContext.theme);

    useEffect(() => {
        document.body.classList.add(`theme-${themeContext.theme}`);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
        document.body.classList.replace(
            `theme-${theme}`,
            `theme-${newTheme}`,
        );

        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={useMemo(() => ({ theme, toggleTheme }), [theme])}>
            <Navbar
                title="Tic Tac Toe"
                items={[
                    {
                        content: <HomeIcon width={24} />,
                        to: '/',
                    },
                    {
                        content: getIconByTheme(theme),
                        onClick: toggleTheme,
                    },
                ]}
            />

            <Outlet />
        </ThemeContext.Provider>
    );
}
