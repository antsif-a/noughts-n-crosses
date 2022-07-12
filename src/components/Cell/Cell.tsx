import React from 'react';
import Button from '../ui/Button';
import PlayerType from '../../types/PlayerType';
import CellData from '../../types/CellData';
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
              disabled={cell.owner !== PlayerType.none}
            >
                {cell.owner !== PlayerType.none && cell.owner}
            </Button>
        </div>
    );
}

export default Cell;
