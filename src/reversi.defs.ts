export type Token = 'W' | 'B';
export type Cell  = Token | '.';

export type Row<C extends Cell = Cell>                              = readonly [C, C, C, C, C, C, C, C];
export type Board<T extends Cell = Cell, R extends Row<T> = Row<T>> = readonly [R, R, R, R, R, R, R, R];

export type ReversiState<T extends Cell = Cell> = {
    board: Board<T>;
    turn: Token;
}

export async function parseReversiState(str: string): Promise<ReversiState> {
    return Promise.reject('Not implemented');
}
