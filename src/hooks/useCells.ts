import { CellData } from '../types/CellData';
import useReusableState from './useReusableState';

function initialCells(quantity = 9): CellData[] {
    const cells: CellData[] = [];
    for (let i = 0; i < quantity; i++) {
        cells.push({ id: i });
    }

    return cells;
}

export default function useCells() {
    const [cells, setCells] = useReusableState(initialCells());

    return {
        cells,
        setCells,
        resetCells: () => setCells(initialCells()),
    };
}
