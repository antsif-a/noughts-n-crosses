import { Player } from './Player';

export interface CellData {
    id: number;
    owner: Player | null;
}
