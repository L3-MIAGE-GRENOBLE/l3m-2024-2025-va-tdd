export type Token = 'W' | 'B';
export type Cell<T extends string[] = []>  = Token | '.' | T[number];

export type Row<T extends string[] = [], C = Cell<T>>  = readonly [C, C, C, C, C, C, C, C];
export type Board<T extends string[] = [], R = Row<T>> = readonly [R, R, R, R, R, R, R, R];

export type ReversiState<T extends string[] = []> = {
    board: Board<T>;
    turn: Token;
}

export async function parseReversiState(str: string): Promise<ReversiState> {
    return Promise.reject('Not implemented');
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
    if (str.length !== 8) return Promise.reject(`invalid row length for "${str}"`);
    return Promise.all(
        str.split("").map((cell) => parseCell(cell, extension)) as [Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>, Promise<Cell<T>>]
    );
}
