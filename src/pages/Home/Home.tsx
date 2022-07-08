import React, { useState } from 'react';
import Board from '../../components/Board';
import Info from '../../components/Info';
import { CellData } from '../../types/CellData';
import { Player } from '../../types/Player';
import './Home.scss';

function initialCells(quantity = 9): CellData[] {
    const cells: CellData[] = [];
    for (let i = 0; i < quantity; i++) {
        cells.push({
            id: i,
            state: null,
        });
    }

    return cells;
}

export default function Home() {
    const [turn, setTurn] = useState(Player.X);
    const [cells, setCells] = useState(initialCells());

    const onReset = () => {
        setTurn(Player.X);
        setCells(initialCells());
    };

    return (
        <div className="container">
            <Board
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            />
            <Info
              turn={turn}
              onReset={onReset}
            />
        </div>
    );
}
