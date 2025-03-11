import { parseCell, Cell, parseRow, Row, parseBoard, Board } from "./reversi.defs";
import { deepStrictEqual, fail } from "assert";

describe("Parse : can parse a cell", () => {
    it("should be able to parse a serialized cell : '.'", async () => {
        const state = await parseCell(".");
        deepStrictEqual<Cell>(state, ".");
    });

    it("should be able to parse a serialized cell : 'W'", async () => {
        const state = await parseCell("W");
        deepStrictEqual<Cell>(state, "W");
    });

    it("should be able to parse a serialized cell : 'B'", async () => {
        const state = await parseCell("B");
        deepStrictEqual<Cell>(state, "B");
    });

    it("should be able to parse a cell indicating that current player can play here (using '0')", async () => {
        const state = await parseCell("0", ["0"]);
        deepStrictEqual<Cell<['0']>>(state, "0");
    });

});

describe("Parse : can parse a row", () => {
    it("should be able to parse an empty row", async () => {
        const state = await parseRow("........");
        deepStrictEqual<Row>(state, [".", ".", ".", ".", ".", ".", ".", "."]);
    });

    it("should be able to parse a row", async () => {
        const state = await parseRow("....BW..");
        deepStrictEqual<Row>(state, [".", ".", ".", ".", "B", "W", ".", "."]);
    });

    it("should be able to parse a row with indications of '0'", async () => {
        const state = await parseRow("...0BW0.", ["0"]);
        deepStrictEqual<Row<['0']>>(state, [".", ".", ".", "0", "B", "W", "0", "."]);
    });

    it("should failed for longer row", async () => {
        return parseRow("...0BW0..", ["0"]).then(
            () => fail("should have failed"),
            (reason) => deepStrictEqual(reason, `invalid row length 9`)
        );
    });

    it("should failed for shorter row", async () => {
        return parseRow(".0BW0..", ["0"]).then(
            () => fail("should have failed"),
            (reason) => deepStrictEqual(reason, `invalid row length 7`)
        );
    });

});

describe("Parse : can parse a board", () => {
    const emptyBoardStr = `........
........
........
........
........
........
........
........`;
    const emptyBoard: Board = [
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
    ];
    
    const initBoardStr = `........
........
........
...BW...
...WB...
........
........
........`;
    const initBoard: Board = [
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", "B", "W", ".", ".", "."],
        [".", ".", ".", "W", "B", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
    ];
    
    it("should be able to parse an empty board", async () => {
        const board = await parseBoard(emptyBoardStr);
        deepStrictEqual(board, emptyBoard);
    });

    it("should be able to parse an initial board", async () => {
        const board = await parseBoard(initBoardStr);
        deepStrictEqual(board, initBoard);
    });

    it("should failed for a board with a row too short", async () => {
        return parseBoard(`........
........
........
...BW...
...WB..
........
........
........`).then(
            () => fail("should have failed"),
            (reason) => deepStrictEqual(reason, `row 5: invalid row length 7`)
        );
    });

    it("should failed for a board with too much rows", async () => {
        return parseBoard(`........
........
........
...BW...
...WB..
........
........
........
........`).then(
            () => fail("should have failed"),
            (reason) => deepStrictEqual(reason, `invalid board height 9`)
        );
    });

    it("should failed for a board with not enough rows", async () => {
        return parseBoard(`........
........
........
...BW...
...WB...
........
........`).then(
            () => fail("should have failed"),
            (reason) => deepStrictEqual(reason, `invalid board height 7`)
        );
    });
});