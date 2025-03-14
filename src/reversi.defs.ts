import { parse } from "path";

export type Token = 'W' | 'B';
export type Cell<T extends string[] = []>  = Token | '.' | T[number];

export type Row<T extends string[] = [], C = Cell<T>>  = readonly [C, C, C, C, C, C, C, C];
export type Board<T extends string[] = [], R = Row<T>> = readonly [R, R, R, R, R, R, R, R];

export type ReversiState<T extends string[] = []> = {
    board: Board<T>;
    turn: Token;
}

export async function parseCell(str: string): Promise<Cell>;
export async function parseCell<T extends string[]>(str: string, extension: T): Promise<Cell<T>>;
export async function parseCell<T extends string[]>(
    str: string,
    extension?: T
): Promise<Cell<T>> {
    switch (str) {
        case ".":
        case "W":
        case "B":
            return str;
        default:
            return (extension && extension.includes(str))
                 ? str
                : Promise.reject(`unrecognized cell "${str}"`);
    }
}

export async function parseRow(str: string): Promise<Row>;
export async function parseRow<T extends string[]>(str: string, extension: T): Promise<Row<T>>;
export async function parseRow<T extends string[]>(str: string, extension?: T): Promise<Row<T>> {
    if (str.length !== 8) return Promise.reject(`invalid row length ${str.length}`);
    extension = extension ?? [] as T;
    return Promise.all(
        str.split("").map((cell) => parseCell(cell, extension)) as [Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>]
    );
}

export async function parseBoard(str: string): Promise<Board>;
export async function parseBoard<T extends string[]>(str: string, extension: T): Promise<Board<T>>;
export async function parseBoard<T extends string[]>(str: string, extension?: T): Promise<Board<T>> {
    const rows = str.split("\n");

    if (rows.length !== 8) return Promise.reject(`invalid board height ${rows.length}`);

    extension = extension ?? [] as T;
    const LP = rows.map(
        (r, i) => parseRow<T>(r, extension).catch( err => Promise.reject(`row ${i+1}: ${err}`) )
    ) as [Promise<Row>, Promise<Row>, Promise<Row>, Promise<Row>, Promise<Row>, Promise<Row>, Promise<Row>, Promise<Row>];

    return Promise.all(LP);
}

export async function parseReversiState(str: string): Promise<ReversiState>;
export async function parseReversiState<T extends string[]>(str: string, extension: T): Promise<ReversiState<T>>;
export async function parseReversiState<T extends string[]>(str: string, extension?: T): Promise<ReversiState<T>> {
    const pos = str.lastIndexOf("\n");
    const boardStr = str.slice(0, pos);
    const turn = str.slice(pos + 1);

    if (turn !== "B" && turn !== "W") return Promise.reject(`invalid turn ${turn}`);

    extension = extension ?? [] as T;
    return parseBoard<T>(boardStr, extension).then(
        board => ({ board, turn })
    );
}