function knightMoves(knightStartingPosition, targetPosition) {
  let [knightX, knightY] = knightStartingPosition;
  const knight = createKnight(knightX, knightY);
  const board = createGameBoard();
  let shortestPath = findShortestPath();
  let legalMoves = knight.generateAllPossibleMoves();

  function findShortestPath() {
    // here i'll implement mine recursive function
  }
}

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
  return {
    board,
    placeKnight,
  };
}

knightMoves([3, 3], [0, 0]);
