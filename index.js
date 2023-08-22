function createKnight(horizontal, vertical) {
  let x = horizontal;
  let y = vertical;
  let knightsCurrentPosition = [x, y];
  let legalMoves = generateAllPossibleMoves();

  function moveKnight(horizontal, vertical) {
    legalMoves = generateAllPossibleMoves();
    for (let i = 0; i < legalMoves.length; i++) {
      const legalMove = legalMoves[i];
      if (legalMove[0] === horizontal && legalMove[1] === vertical) {
        this.x = horizontal;
        this.y = vertical;
        this.knightsCurrentPosition = [this.x, this.y];
        break; // Exit the loop once the move is found
      }
    }
  }
  function generateAllPossibleMoves() {
    const result = [];
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

  return { knightsCurrentPosition, generateAllPossibleMoves, moveKnight };
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
    [x, y] = position;
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
function knightMoves(
  knightsCurrentPosition,
  targetPosition,
  path = [],
  board = createGameBoard()
) {
  let [knightX, knightY] = knightsCurrentPosition;
  let knight = createKnight(knightX, knightY);
  let legalMoves = knight.generateAllPossibleMoves();
  let shortestPath = findShortestPath(knightsCurrentPosition);

  function findShortestPath(knightsCurrentPosition, targetPosition) {
    let [x, y] = knightsCurrentPosition;
    if ((x === knightsCurrentPosition[0], y === knightsCurrentPosition[1])) {
      path.push(knightsCurrentPosition);
      return path;
    }
    if (board[x][y] === null) return;
    board.placeKnight(1, 2);
  }
}

knightMoves([0, 0], [1, 2]);
const board = createGameBoard();
board.placeKnight([3, 3]);
