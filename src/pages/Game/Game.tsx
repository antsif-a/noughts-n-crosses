import React from 'react';
import Board from '@/components/Board';
import Info from '@/components/Info';
import Modal from '@/components/ui/Modal';
import Separator from '@/components/ui/Separator';
import useModal from '@/hooks/useModal';
import useReusableState from '@/hooks/useReusableState';
import useWinner from '@/hooks/useWinner';
import generateCells from '@/helpers/generateCells';
import PlayerType from '@/models/PlayerType';
import GameStyles from './Game.module.scss';

export default function Game() {
    const [turn, setTurn, resetTurn] = useReusableState(PlayerType.X);
    const [cells, setCells, resetCells] = useReusableState(generateCells());
    const { winner, resetWinner } = useWinner(cells);
    const { modalActive, setModalActive } = useModal(() => winner !== PlayerType.none, [winner]);

    const onReset = () => {
        resetTurn();
        resetCells();
        resetWinner();
    };

    const onModalClose = () => {
        onReset();
        setModalActive(false);
    };

    return (
        <>
            <Modal active={modalActive} onClose={onModalClose}>
                <p>Winner: {winner}</p>
            </Modal>
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
                    onReset={onReset}
                />
            </div>
        </>
    );
}
