# Problème de Reversi tiré de CyberDojo

Original : https://beta.cyber-dojo.org/creator/choose_problem

Reversi is a board game for two players. The board contains 8x8 squares. The players place Black or White counters onto the board, one counter per square. More information can be found on Wikipedia en.wikipedia.org/wiki/Reversi?. Your task is to write a program that takes a current board position together with information about whose turn it is, and returns a list of the legal moves for that player. A move is only legal if it results in at least one of the opponent's counters being flipped.

Example input: (the final B indicates it is Black's turn)
```
........
........
........
...BW...
...WB...
........
........
........
B
```

Example output: (each zero indicates a legal move for Black)
```
........
........
....0...
...BW0..
..0WB...
...0....
........
........
B
```
