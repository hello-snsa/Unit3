function runProgram(input) {

    input = input.trim();

    var newInput = input.split(/[\r\n]+/);


    var testcase = Number(newInput[0]);
    var r = 0;

    for (var a = 0; a < testcase; a++) {

        var dim = newInput[r + a + 1].split(" ").map(Number);
        var rows = dim[0];
        var cols = dim[0];
        var n = newInput[a + 1];

        var mat = newInput.slice(r + a + 2, r + a + 2 + rows)
            .map(function (row) {
                return row.split(" ").map(Number);
            });

        r = r + rows;

        // console.log(mat);

        var res = fun(mat, n);
        console.log(res);

        function fun(mat, n) {

            var result = "";
            var count = 0;

            var totalElements = rows * cols;
            var minRows = 0;
            var maxRows = rows - 1;
            var minCols = 0;
            var maxCols = cols - 1;

            while (count < totalElements) {

                //left wall
                for (var i = minRows, j = minCols; i <= maxRows && count < totalElements; i++) {
                    result += mat[i][j] + " ";
                    count++;

                }
                minCols++;


                //Bottom wall
                for (var i = maxRows, j = minCols; j <= maxCols && count < totalElements; j++) {
                    result += mat[i][j] + " ";
                    count++;
                }
                maxRows--;

                //Right wall
                for (var i = maxRows, j = maxCols; i >= minRows && count < totalElements; i--) {

                    result += mat[i][j] + " ";
                    count++;

                }
                maxCols--;

                //Top wall
                for (var i = minRows, j = maxCols; j >= minCols && count < totalElements; j--) {
                    result += mat[i][j] + " ";
                    count++;

                }
                minRows++;

            }

            return result;
        }


    }//end of query
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