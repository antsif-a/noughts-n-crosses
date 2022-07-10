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
        <div className={InfoStyles.info}>
            <div>
                <p>Turn: <Player player={turn} /></p>
                <p>Winner: <Player player={winner} defaultValue="-" /></p>
            </div>
            <Button onClick={() => onReset()}>Reset</Button>
        </div>
    );
}

export default Info;
