import React from 'react';
import Button from '../Button';
import { Player } from '../../types/Player';
import InfoStyles from './Info.module.scss';

interface InfoProps {
    turn: Player;
    onReset: () => void;
}

function Info({ turn, onReset }: InfoProps) {
    const renderTurn = (turn: Player) => {
        switch (turn) {
            case Player.X:
                return 'X';
            case Player.O:
                return 'O';
            default:
                return '-';
        }
    };

    return (
        <div className={InfoStyles.info}>
            <p>Turn: {renderTurn(turn)}</p>
            <Button onClick={() => onReset()}>Reset</Button>
        </div>
    );
}

export default Info;
