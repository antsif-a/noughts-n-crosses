import React from 'react';
import { PlayerType } from '../../types/PlayerType';

interface PlayerProps {
    player: PlayerType | undefined;
    defaultValue?: string;
}

function Player({ player, defaultValue }: PlayerProps) {
    const renderPlayer = () => {
        switch (player) {
            case PlayerType.X:
                return 'X';
            case PlayerType.O:
                return 'O';
            default:
                return defaultValue;
        }
    };

    return (
      <>{renderPlayer()}</>
    );
}

Player.defaultProps = {
    defaultValue: '',
};

export default Player;
