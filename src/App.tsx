import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeContext from '@/context/theme';
import useTheme from '@/hooks/useTheme';
import ThemeType from '@/models/ThemeType';
import Index from '@/pages/Index';
import Home from '@/pages/Home';
import Game from '@/pages/Game';

function App() {
    const themeContext = useTheme();
    const [theme, setTheme] = useState(themeContext.theme);

    const toggleTheme = () => {
        setTheme((theme) => {
            return theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
        });
    };

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Routes>
                    <Route path="/" element={<Index />}>
                        <Route index element={<Home />} />
                        <Route path="game" element={<Game />} />
                    </Route>
                </Routes>
            </ThemeContext.Provider>
        </BrowserRouter>
    );
}

export default App;
