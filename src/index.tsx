import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Home from './pages/Home';

const container = document.getElementById('root')!;

createRoot(container).render((
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
));
