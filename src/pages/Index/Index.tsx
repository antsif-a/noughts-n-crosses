import React, { useEffect, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/ui/Navbar';
import ThemeContext from '@/context/theme';
import useTheme from '@/hooks/useTheme';
import ThemeType from '@/models/ThemeType';
import './Index.module.scss';

export default function Index() {
    const themeContext = useTheme();
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
            <Navbar title="Tic Tac Toe" />
            <Outlet />
        </ThemeContext.Provider>
    );
}
