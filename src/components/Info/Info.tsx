import React from 'react';
import Button from '@/components/ui/Button';
import PlayerType from '@/models/PlayerType';
import InfoStyles from './Info.module.scss';

interface InfoProps {
    turn: PlayerType;
    onReset: () => void;
}

export default function Info({ turn, onReset }: InfoProps) {
    return (
        <div>
            <div className={InfoStyles.info}>
                <h3>Turn: {turn}</h3>
                <Button onClick={() => onReset()}>Reset</Button>
            </div>
        </div>
    );
}
