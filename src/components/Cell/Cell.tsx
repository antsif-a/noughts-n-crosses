import React from 'react';
import Button from '../ui/Button';
import Player from '../Player';
import { CellData } from '../../types/CellData';
import CellStyles from './Cell.module.scss';

interface CellProps {
    cell: CellData;
    onClick: () => void;
}

function Cell({ cell, onClick }: CellProps) {
    return (
        <div className={CellStyles.cell}>
            <Button
              onClick={onClick}
              disabled={cell.owner !== undefined}
            >
                <Player player={cell.owner} />
            </Button>
        </div>
    );
}

export default Cell;
