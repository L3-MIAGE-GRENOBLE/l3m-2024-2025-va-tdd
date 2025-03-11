import { Board, ReversiState } from "./reversi.defs";

export const emptyBoardStr = `........
........
........
........
........
........
........
........`;
    
export const initBoardStr = `........
........
........
...BW...
...WB...
........
........
........`;
    
export const initBoardWhereCanPlayStr = `........
........
....0...
...BW0..
..0WB...
...0....
........
........`;

export const emptyBoard: Board = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
];

export const initBoard: Board = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", "W", ".", ".", "."],
    [".", ".", ".", "W", "B", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
];

export const initBoardWhereCanPlay: Board<['0']> = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "0", ".", ".", "."],
    [".", ".", ".", "B", "W", "0", ".", "."],
    [".", ".", "0", "W", "B", ".", ".", "."],
    [".", ".", ".", "0", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
];

export const initReversiStateStr = `${initBoardWhereCanPlayStr}\nB`;
export const initReversiState: ReversiState = {
    board: initBoard,
    turn: "B",
};
