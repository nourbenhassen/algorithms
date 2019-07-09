/*
1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition
*/

/*tests: 
if table contains more than 9 cells
if table contains characters different from '.' and digits
*/

var isValidSudoku = function(board) {
    for (let i=0; i<board.length; i++) {
        let allNbRow=[];
        for (let j=0; j<board[i].length; j++) {
            if (board[i][j]==='.')
                continue;
            //row check
            else if (allNbRow.indexOf(board[i][j]) !== -1) return false;
            else allNbRow.push(board[i][j]);
            
            //square check
            
            
            //column check
        }
        return true;
    }
};

//console.log([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]);
//returns true;
