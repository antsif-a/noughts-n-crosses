import { useEffect, useMemo, useState } from 'react';
import { CellData } from '../types/CellData';
import { PlayerType } from '../types/PlayerType';

function checkCells(...cells: CellData[]) {
    return cells.every((c) => c.owner === PlayerType.X)
      || cells.every((c) => c.owner === PlayerType.O);
}

function checkRow(cells: CellData[], rowLength: number, row: number) {
    return cells[row * rowLength].owner !== undefined && checkCells(
        cells[row * rowLength],
        cells[1 + row * rowLength],
        cells[2 + row * rowLength],
    );
}

function checkColumn(cells: CellData[], columnLength: number, column: number) {
    return cells[column].owner !== undefined && checkCells(
      cells[column],
      cells[column + columnLength],
      cells[column + columnLength * 2],
    );
}

function checkDiagonal(cells: CellData[], diagonalLength: number, diagonal: number) {
    return cells[diagonal === 0 ? 0 : diagonalLength - 1].owner !== undefined && checkCells(
      cells[diagonal === 0 ? 0 : diagonalLength - 1],
      cells[diagonalLength + 1],
      cells[diagonal === 0 ? diagonalLength ** 2 - 1 : diagonalLength * 2],
    );
}

export default function useWinner(cells: CellData[], turn: PlayerType) {
    const [winner, setWinner] = useState<PlayerType>();

    const lineLength = useMemo(() => Math.sqrt(cells.length), cells);

    useEffect(() => {
        for (let i = 0; i < 2; i++) {
            if (checkDiagonal(cells, lineLength, i)) {
                setWinner(cells[i === 0 ? 0 : lineLength].owner);
            }
        }

        for (let i = 0; i < lineLength; i++) {
            if (checkRow(cells, lineLength, i)) {
                setWinner(cells[i * lineLength].owner);
            } else if (checkColumn(cells, lineLength, i)) {
                setWinner(cells[i].owner);
            }
        }
    }, [turn]);

    return {
        winner,
        resetWinner: () => setWinner(undefined),
    };
}
