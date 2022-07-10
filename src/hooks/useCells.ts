import { useState } from 'react';
import { CellData } from '../types/CellData';

function initialCells(quantity = 9): CellData[] {
    const cells: CellData[] = [];
    for (let i = 0; i < quantity; i++) {
        cells.push({ id: i });
    }

    return cells;
}

export default function useCells() {
    const [cells, setCells] = useState(initialCells());

    return {
        cells,
        setCells,
        resetCells: () => setCells(initialCells()),
    };
}
