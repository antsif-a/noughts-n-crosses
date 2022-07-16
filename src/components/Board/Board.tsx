import React from 'react';
import Cell from '@/components/Cell';
import CellData from '@/models/CellData';
import PlayerType from '@/models/PlayerType';
import BoardStyles from './Board.module.scss';

interface BoardProps {
    turn: PlayerType;
    setTurn: (turn: PlayerType) => void;
    cells: CellData[];
    setCells: (cells: CellData[]) => void;
}

export default function Board({
    turn,
    setTurn,
    cells,
    setCells,
}: BoardProps) {
    const onCellClick = (id: number) => {
        const tempCells = [...cells];
        tempCells.some((cell, i) => {
            if (cell.id === id) {
                tempCells[i].owner = turn;
                setCells(tempCells);
                setTurn(turn === PlayerType.X ? PlayerType.O : PlayerType.X);
                return true;
            }

            return false;
        });
    };

    return (
        <div className={BoardStyles.board}>
            {cells.map((cell) => (
                <Cell
                    key={cell.id}
                    cell={cell}
                    onClick={() => onCellClick(cell.id)}
                />
            ))}
        </div>
    );
}
