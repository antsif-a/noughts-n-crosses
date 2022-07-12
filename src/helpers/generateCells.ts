import CellData from '../models/CellData';
import PlayerType from '../models/PlayerType';

export default function generateCells(quantity = 9): CellData[] {
    const cells: CellData[] = [];
    for (let i = 0; i < quantity; i++) {
        cells.push({ id: i, owner: PlayerType.none });
    }

    return cells;
}
