import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Home from './pages/Home';
import Play from './pages/Play';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route index element={<Home />} />
                    <Route path="play" element={<Play />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
