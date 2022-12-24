/*KATA 6
Chess Fun #1: Chess Board Cell Color
Task
Given two cells on the standard chess board, determine whether they have the same color or not.

Example
For cell1 = "A1" and cell2 = "C3", the output should be true.



For cell1 = "A1" and cell2 = "H3", the output should be false.



Input/Output
[input] string cell1

[input] string cell2

[output] a boolean value

true if both cells have the same color, false otherwise.
*/

// function chessBoardCellColor() { //cell1, cell2
//     const makeBoard = () => {
//         let board = [];
//         let str = "";
//         for (let i = 0; i < 8; i++) {
//             for (let j = 1; j < 9; j++) {
//                 if((i+j)%2 === 0 && board[board.length-1][0] !== "W"){
//                     str += "#"
//                     board.push(`W-${j}`);
//                 }else if((i+j)%2 !== 0 && board[board.length-1][0] !== "B"){
//                     str += " "
//                     board.push(`B-${j}`)
//                 }
//             }
//             str += ("\n");
//         }
//         return board;
//     }
//     makeBoard();
    
//     const addPositionToBoard = () => {
//         const board = makeBoard();
//         console.log(board)
//         const arrObjBoard = [];
//         const positionLetters = ["A","B","C","D","E","F","G", "H"];
//         for (let i = 0; i < board.length; i++) {
//             if(i>=0 && i<8){
//                 arrObjBoard.push({"position": `${positionLetters[i]}${1}`, "color": `${board[i][0]}`})
//             }else if(i>8 && i <= 16){
//                 arrObjBoard.push({"position": `${positionLetters[i-9]}${2}`, "color": `${board[i][0]}`})
//             }else if(i>16 && i <= 24){
//                 arrObjBoard.push({"position": `${positionLetters[i-17]}${3}`, "color": `${board[i][0]}`})
//             }else if(i>24 && i <= 32){
//                 arrObjBoard.push({"position": `${positionLetters[i-25]}${4}`, "color": `${board[i][0]}`})
//             }else if(i>32 && i <= 40){
//                 arrObjBoard.push({"position": `${positionLetters[i-33]}${5}`, "color": `${board[i][0]}`})
//             }else if(i>40 && i <= 48){
//                 arrObjBoard.push({"position": `${positionLetters[i-41]}${6}`, "color": `${board[i][0]}`})
//             }else if(i>48 && i <= 56){
//                 arrObjBoard.push({"position": `${positionLetters[i-49]}${7}`, "color": `${board[i][0]}`})
//             }else if(i>56 && i <= 64){
//                 arrObjBoard.push({"position": `${positionLetters[i-57]}${8}`, "color": `${board[i][0]}`})
//             }
            
//         }
//         arrObjBoard.push
//         return arrObjBoard;
    
//     }
//     console.log( addPositionToBoard() );
// }

// chessBoardCellColor()


function chessBoardCellColor(cell1,cell2) { //cell1, cell2
    const createNormalRow = (tipo, numero) => {
        const normalRowArr = [];
        let objArrRow = {};
        const positionLetters = ["A","B","C","D","E","F","G", "H"];
        for (let i = 0; i < 8; i++) {
            objArrRow = {};
            objArrRow["position"]  = `${positionLetters[i]}${numero}`;
            objArrRow["color"] = (i%2 === tipo) ? "B" : "W"
            normalRowArr.push(objArrRow)
        }
        return normalRowArr;
    }
    const createBoard = ()=> {
        const gameBoard = [];
        gameBoard.push(createNormalRow(0,1)); 
        gameBoard.push(createNormalRow(1,2));
        gameBoard.push(createNormalRow(0,3)); 
        gameBoard.push(createNormalRow(1,4));
        gameBoard.push(createNormalRow(0,5)); 
        gameBoard.push(createNormalRow(1,6));
        gameBoard.push(createNormalRow(0,7)); 
        gameBoard.push(createNormalRow(1,8));
        return gameBoard;           
    }
    const gameBoard = createBoard();
    const checkEqualCells = (c1,c2) => {
        const findCellColor = (cell) => {
            let matchStr = "";
            gameBoard.forEach(objRow => {
                for(const item of objRow) {
                    if(item["position"] === cell){
                        matchStr = item["color"];
                    }
                    
                }
            })
            return matchStr;
        }
       return (findCellColor(c1) === findCellColor(c2)) ? true : false;
    }
    return checkEqualCells(cell1, cell2)
}
console.log(
chessBoardCellColor("A2", "C2")
);
console.log(
chessBoardCellColor("A1", "B1")
);
console.log(
chessBoardCellColor("A1", "H8")
);
