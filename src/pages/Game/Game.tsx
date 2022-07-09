import React, { useState } from 'react';
import { Player } from '../../types/Player';
import { CellData } from '../../types/CellData';
import Board from '../../components/Board';
import Info from '../../components/Info';
import './Game.scss';

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

function Game() {
    const [turn, setTurn] = useState(Player.X);
    const [cells, setCells] = useState(initialCells());

    const onReset = () => {
        setTurn(Player.X);
        setCells(initialCells());
    };

    return (
        <div className="Game">
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

export default Game;
