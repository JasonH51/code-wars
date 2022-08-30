function doneOrNot(board) {
  let start = 0;
  let row = new Map();
  for (let i = 0; i < board.length; i++) {
    row.set(board[start][i], true);
    if (i === board.length - 1 && start < board.length - 1) {
      if (row.size != 9 || row.get(0) === true) {
        console.log('nope');
        return 'Try again!';
      }
      i = -1;
      start++;
      row = new Map();
    }
  }
  start = 0;
  for (let i = 0; i < board.length; i++) {
    console.log(i, start, board[i][start]);
    row.set(board[i][start], true);
    if (i === board.length - 1 && start < board.length - 1) {
      if (row.size != 9 || row.get(0) === true) {
        console.log('nope');
        return 'Try again!';
      }
      i = -1;
      start++;
      row = new Map();
    }
  }
  console.log('finisiued');
  return 'Finished!';
}

// doneOrNot([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]);

// doneOrNot([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 9, 3, 4, 9],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]);

doneOrNot([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [9, 1, 2, 3, 4, 5, 6, 7, 8]
]);
