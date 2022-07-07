import React from 'react';
import Button from '../Button';
import { CellData } from '../../types/CellData';
import { Player } from '../../types/Player';
import CellStyles from './Cell.module.scss';

interface CellProps {
    cell: CellData;
    onClick: () => void;
}

function renderCellState(cell: CellData) {
    switch (cell.state) {
        case Player.X:
            return 'X';
        case Player.O:
            return 'O';
        case null:
            return ' ';
        default:
            return ' ';
    }
}

function Cell({ cell, onClick }: CellProps) {
    return (
        <div className={CellStyles.cell}>
            <Button
              onClick={onClick}
              disabled={cell.state !== null}
            >
                {renderCellState(cell)}
            </Button>
        </div>
    );
}

export default Cell;
