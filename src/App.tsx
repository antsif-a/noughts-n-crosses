import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
