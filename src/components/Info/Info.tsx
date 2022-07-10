import React from 'react';
import Button from '../ui/Button';
import Player from '../Player';
import { PlayerType } from '../../types/PlayerType';
import InfoStyles from './Info.module.scss';

interface InfoProps {
    turn: PlayerType;
    winner: PlayerType | undefined;
    onReset: () => void;
}

function Info({ turn, winner, onReset }: InfoProps) {
    return (
        <div>
            <div className={InfoStyles.info}>
                <div className={InfoStyles.separator} />
                <h3>Turn: <Player player={turn} /></h3>
                <h3>Winner: <Player player={winner} defaultValue="-" /></h3>
            </div>
            <Button onClick={() => onReset()}>Reset</Button>
        </div>
    );
}

export default Info;
