import { parseCell, Cell, parseRow, Row } from "./reversi.defs";
import { deepStrictEqual } from "assert";

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

});