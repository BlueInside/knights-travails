function createKnight(coords, previousMoves = []) {
  const [x, y] = coords;
  let position = [x, y];
  let childMoves = generateAllPossibleMoves(position);
  function generateAllPossibleMoves(position) {
    const result = [];
    let [x, y] = position;
    // Calculate and check possible moves in different directions

    // Two to the Left One Up
    let move = [x - 2, y + 1];
    if (isLegalMove(move[0], move[1])) result.push(move);

    // One to the Left Two Up
    move = [x - 1, y + 2];
    if (isLegalMove(move[0], move[1])) result.push(move);

    // One to the Right Two Up
    move = [x + 1, y + 2];
    if (isLegalMove(move[0], move[1])) result.push(move);

    // Two to the Right One Up
    move = [x + 2, y + 1];
    if (isLegalMove(move[0], move[1])) result.push(move);

    // Two to the Right One down
    move = [x + 2, y - 1];
    if (isLegalMove(move[0], move[1])) result.push(move);

    // One to the Right Two Down
    move = [x + 1, y - 2];
    if (isLegalMove(move[0], move[1])) result.push(move);

    // One to the Left Two down
    move = [x - 1, y - 2];
    if (isLegalMove(move[0], move[1])) result.push(move);

    // Two to the Left One down
    move = [x - 2, y - 1];
    if (isLegalMove(move[0], move[1])) result.push(move);

    return result;
  }
  function isLegalMove(x, y) {
    if (x < 0 || x > 7) return false;
    else if (y < 0 || y > 7) return false;
    else return true;
  }

  return { previousMoves, position, childMoves };
}

function createGameBoard() {
  const board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i].push([i, j]);
    }
  }
  function placeKnight(position) {
    let [x, y] = position;
    board[x][y] = null;
  }
  function isLegalMove(x, y) {
    if (x < 0 || x > 7) return false;
    else if (y < 0 || y > 7) return false;
    else return true;
  }
  function printBoard() {
    for (let i = 0; i < board.length; i++) {
      console.log(
        board[i].map((cell) => (cell === null ? 'null' : cell)).join(' ')
      );
    }
  }
  return {
    board,
    placeKnight,
    isLegalMove,
    printBoard,
  };
}
function knightMoves(knightsCurrentPosition, targetPosition) {
  let gameBoard = createGameBoard();
  const { board, placeKnight } = gameBoard;
  let shortestPath = findShortestPath(knightsCurrentPosition);
  function printPretty(array) {
    console.log(`You made it in ${array.length} heres your path:`);
    for (let index = 0; index < array.length; index++) {
      console.log(`[${array[index]}]`);
    }
  }

  function findShortestPath(currentKnight, gameBoard = board, queue = []) {
    const knight = createKnight(currentKnight, [currentKnight]);
    queue.push(knight);
    let result;
    while (queue.length > 0) {
      const previousElement = queue[0];
      const currentElement = queue.shift();
      if (
        gameBoard[currentElement.position[0]][currentElement.position[1]] ===
        null
      )
        continue;
      if (
        currentElement.position[0] === targetPosition[0] &&
        currentElement.position[1] === targetPosition[1]
      ) {
        result = currentElement.previousMoves;
        return result;
      }

      placeKnight(currentElement.position);

      const possibleMoves = currentElement.childMoves;

      for (const possibleMove of possibleMoves) {
        const newPreviousMoves = [
          ...currentElement.previousMoves,
          possibleMove,
        ];
        const knight = createKnight(possibleMove, newPreviousMoves);
        queue.push(knight);
      }
    }
    return result;
  }

  printPretty(shortestPath);
}

console.log(knightMoves([2, 3], [6, 5]));
