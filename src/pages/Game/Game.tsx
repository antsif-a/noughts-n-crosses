import React, { useState } from 'react';
import { Player } from '../../types/Player';
import Board from '../../components/Board';
import Info from '../../components/Info';
import useCells from '../../hooks/useCells';
import './Game.scss';

function Game() {
    const [turn, setTurn] = useState(Player.X);
    const { cells, setCells, resetCells } = useCells();

    const onReset = () => {
        setTurn(Player.X);
        resetCells();
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
