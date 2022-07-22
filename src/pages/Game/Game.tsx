import React from 'react';
import Board from '@/components/content/Board';
import Info from '@/components/content/Info';
import Separator from '@/components/ui/Separator';
import useReusableState from '@/hooks/useReusableState';
import useWinner from '@/hooks/useWinner';
import generateCells from '@/helpers/generateCells';
import PlayerType from '@/models/PlayerType';
import GameStyles from './Game.module.scss';
import WinnerModal from '@/components/content/WinnerModal';

export default function Game() {
    const [turn, setTurn, resetTurn] = useReusableState(PlayerType.X);
    const [cells, setCells, resetCells] = useReusableState(generateCells());
    const { winner, resetWinner } = useWinner(cells);

    const resetGame = () => {
        resetTurn();
        resetCells();
        resetWinner();
    };

    return (
        <>
            <WinnerModal winner={winner} onClose={resetGame} />
            <div className={GameStyles.Game}>
                <Board
                    turn={turn}
                    setTurn={setTurn}
                    cells={cells}
                    setCells={setCells}
                />
                <Separator />
                <Info
                    turn={turn}
                    onReset={resetGame}
                />
            </div>
        </>
    );
}
