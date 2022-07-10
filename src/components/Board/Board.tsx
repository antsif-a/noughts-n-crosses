import React from 'react';
import { Player } from '../../types/Player';
import { CellData } from '../../types/CellData';
import Cell from '../Cell/Cell';
import BoardStyles from './Board.module.scss';

interface BoardProps {
    turn: Player;
    setTurn: (turn: Player) => void;
    cells: CellData[];
    setCells: (cells: CellData[]) => void;
}

function Board({
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
                setTurn(turn === Player.X ? Player.O : Player.X);
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

export default Board;
