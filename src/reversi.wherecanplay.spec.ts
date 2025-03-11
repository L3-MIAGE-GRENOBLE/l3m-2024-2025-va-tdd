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

    it("should be able to parse a serialized cell : '.'", async () => {
        const state = await parseCell(".");
        deepStrictEqual<Cell>(state, ".");
    });

    it("should be able to parse a serialized cell : 'W'", async () => {
        const state = await parseCell("W");
        deepStrictEqual<Cell>(state, "W");
    });

});
  