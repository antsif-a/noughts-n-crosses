import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index, { IndexMiddleware } from '@/pages/Index';
import Game from '@/pages/Game';

export default function App() {
    return (
        <BrowserRouter basename="/react-tic-tac-toe">
            <Routes>
                <Route path="/" element={<IndexMiddleware />}>
                    <Route index element={<Index />} />
                    <Route path="game" element={<Game />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
