import { parseCell, Cell } from "./reversi.defs";
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
