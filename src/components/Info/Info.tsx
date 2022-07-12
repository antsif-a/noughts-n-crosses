import React from 'react';
import Button from '../ui/Button';
import Separator from '../ui/Separator';
import { PlayerType } from '../../types/PlayerType';
import InfoStyles from './Info.module.scss';

interface InfoProps {
    turn: PlayerType;
    onReset: () => void;
}

function Info({ turn, onReset }: InfoProps) {
    return (
        <div>
            <Separator />
            <div className={InfoStyles.info}>
                <h3>Turn: {turn}</h3>
                <Button onClick={() => onReset()}>Reset</Button>
            </div>
        </div>
    );
}

export default Info;
