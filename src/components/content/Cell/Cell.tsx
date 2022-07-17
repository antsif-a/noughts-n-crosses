import React from 'react';
import Button from '@/components/ui/Button';
import CellData from '@/models/CellData';
import PlayerType from '@/models/PlayerType';
import CellStyles from './Cell.module.scss';

interface CellProps {
    cell: CellData;
    onClick: () => void;
}

export default function Cell({ cell, onClick }: CellProps) {
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
