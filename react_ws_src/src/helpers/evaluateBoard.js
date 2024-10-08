export function evaluateBoard(board, player) {
    const opponent = player === 'o' ? 'x' : 'o';
    // First check if the computer can win
    const winningMove = findWinningMove(board, player);
    if (winningMove !== -1) {
       return winningMove;
    }
 
    // Then check if it can block the player's winning move
    const blockingMove = findWinningMove(board, opponent);
    if (blockingMove !== -1) {
       return blockingMove;
    }
 
    // Otherwise, pick a strategic move
    return pickBestMove(board, player);
 }
 
 function findWinningMove(board, player) {
    const winConditions = [
       [0, 1, 2], [3, 4, 5], [6, 7, 8],
       [0, 3, 6], [1, 4, 7], [2, 5, 8],
       [0, 4, 8], [2, 4, 6]           
    ];
 
    for (const condition of winConditions) {
       const [a, b, c] = condition;
       if (board[a] === player && board[b] === player && typeof board[c] === 'number') {
          return c;
       }
       if (board[a] === player && board[c] === player && typeof board[b] === 'number') {
          return b;
       }
       if (board[b] === player && board[c] === player && typeof board[a] === 'number') {
          return a;
       }
    }
    return -1;
 }
 
 function pickBestMove(board, player) {
    // Prioritize the center if available, then corners, then edges
    if (typeof board[4] === 'number') return 4;
    const corners = [0, 2, 6, 8];
    for (const corner of corners) {
       if (typeof board[corner] === 'number') {
          return corner;
       }
    }
    const edges = [1, 3, 5, 7];
    for (const edge of edges) {
       if (typeof board[edge] === 'number') {
          return edge;
       }
    }

    return board.findIndex((val) => typeof val === 'number');
 }