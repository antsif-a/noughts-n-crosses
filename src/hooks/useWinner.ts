import { useState } from 'react';
import { CellData } from '../types/CellData';
import { PlayerType } from '../types/PlayerType';

function checkCells(...cells: CellData[]) {
    return cells.every((c) => c.owner === PlayerType.X)
      || cells.every((c) => c.owner === PlayerType.O);
}

function checkRow(cells: CellData[], cellsPerRow: number, row: number) {
    return cells[row * cellsPerRow].owner !== undefined && checkCells(
        cells[row * cellsPerRow],
        cells[1 + row * cellsPerRow],
        cells[2 + row * cellsPerRow],
    );
}

function checkColumn(cells: CellData[], cellsPerColumn: number, column: number) {
    return cells[column].owner !== undefined && checkCells(
      cells[column],
      cells[column + cellsPerColumn],
      cells[column + cellsPerColumn * 2],
    );
}

function checkDiagonal(cells: CellData[], cellsPerDiagonal: number, diagonal: number) {
    return cells[diagonal === 0 ? 0 : cellsPerDiagonal - 1].owner !== undefined && checkCells(
      cells[diagonal === 0 ? 0 : 2],
      cells[4],
      cells[diagonal === 0 ? 8 : 6],
    );
}

export default function useWinner() {
    const [winner, setWinner] = useState<PlayerType>();

    const updateWinner = (cells: CellData[]) => {
        const cellsPerLine = Math.sqrt(cells.length);

        for (let i = 0; i < 2; i++) {
            if (checkDiagonal(cells, cellsPerLine, i)) {
                setWinner(cells[i === 0 ? 0 : cellsPerLine].owner);
            }
        }

        for (let i = 0; i < cellsPerLine; i++) {
            if (checkRow(cells, cellsPerLine, i)) {
                setWinner(cells[i * cellsPerLine].owner);
            } else if (checkColumn(cells, cellsPerLine, i)) {
                setWinner(cells[i].owner);
            }
        }
    };

    const resetWinner = () => setWinner(undefined);

    return { winner, updateWinner, resetWinner };
}
