import { deepStrictEqual } from "assert";
import { Cell, parseCell, parseReversiState, ReversiState } from "./reversi.defs";

describe("Reversi : can parse serialized reversi state", () => {
    const strState = `........
........
........
...BW...
...WB...
........
........
........
B`;
    
    const initReversiState: ReversiState = {
        board: [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', 'B', 'W', '.', '.', '.'],
            ['.', '.', '.', 'W', 'B', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
        ],
        turn: 'B'
    }
    
    // it("should be able to parse the standard state", async () => {
    //     const state = await parseReversiState(strState);
    //     deepStrictEqual(state, initReversiState);
    // });

});

