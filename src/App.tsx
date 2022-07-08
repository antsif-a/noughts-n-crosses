import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.scss';

export default function App() {
    return (
        <div className="app">
            <Navbar title="Tic Tac Toe" />
            <Outlet />
        </div>
    );
}
