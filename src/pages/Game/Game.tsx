import React, { useState } from 'react';
import { PlayerType } from '../../types/PlayerType';
import Board from '../../components/Board';
import Info from '../../components/Info';
import useCells from '../../hooks/useCells';
import useWinner from '../../hooks/useWinner';
import './Game.scss';

function Game() {
    const [turn, setTurn] = useState(PlayerType.X);
    const { cells, setCells, resetCells } = useCells();
    const { winner, resetWinner } = useWinner(cells, turn);

    const onReset = () => {
        setTurn(PlayerType.X);
        resetCells();
        resetWinner();
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
              winner={winner}
              onReset={onReset}
            />
        </div>
    );
}

export default Game;
