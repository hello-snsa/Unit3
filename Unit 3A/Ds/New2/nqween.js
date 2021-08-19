function runProgram(input) {

    input = input.trim();
    input = Number(input);

    chess = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    // let row=input;
    let result = Nqueen(chess, input);

    function Nqueen(chess, row) {
        if (row >= chess.length) {
            // console.log()
            console.log(chess);
            return;
        }
        for (let col = 0; col < chess.length; col++) {
            if (queen(chess, row, col)) {
                chess[row][col] = 1;
                Nqueen(chess, row + 1)
                chess[row][col] = 0;
            }
        }
    }



    // let res= queen(chess,row,col);

    function queen(chess, row, col) {
        for (let i = row - 1, j = col; i >= 0; i--) {
            if (chess[i][j] == 1)
                return false;

        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chess[i][j] == 1) {
                return false;
            }

        }

        for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
            if (chess[i][j] == 1) {
                return false;
            }

            return true;
        }
    }

    console.log(result);




}//End of runProgram()

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = ``;
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});//End of program