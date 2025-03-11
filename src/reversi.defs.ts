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

export async function parseCell<T extends string[]>(str: string): Promise<Cell<T>> {
    switch (str) {
        case ".":
        case "W":
        case "B":
            return str;
        default: return Promise.reject('Not implemented');
    }
}