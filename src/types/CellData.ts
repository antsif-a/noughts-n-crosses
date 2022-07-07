import { Player } from './Player';

export interface CellData {
    id: number;
    state: Player | null;
}
