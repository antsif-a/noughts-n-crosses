import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import Home from '@/pages/Home';
import Game from '@/pages/Game';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route index element={<Home />} />
                    <Route path="game" element={<Game />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
