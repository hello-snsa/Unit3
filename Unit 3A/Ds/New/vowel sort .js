function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);

    var testcase = Number(newInput[0]);
    var r = 0;

    for (var a = 0; a < testcase; a++) {

        var dim = newInput[r + a + 1].split(" ").map(Number);
        var rows = dim[0];
        var cols = dim[1];

        var mat = newInput.slice(r + a + 2, r + a + 2 + rows)
            .map(function (row) {
                return row.split("");
            });

        r = r + rows;

        //   console.log(mat);
        var newArr = [];
        var lastArr = [];

        for (let i = 0; i < rows; i++) {
            // for(let j=0;j<cols;j++)
            // {
            if (mat[i][0] == 'a' || mat[i][0] == 'e' || mat[i][0] == 'i' || mat[i][0] == 'o' || mat[i][0] == 'u') {
                newArr.push(mat[i])
            }
            else {
                lastArr.push(mat[i])
            }
            // }
        }
        for (let i = 0; i < newArr.length; i++) {

            console.log(newArr[i].join(""));
        }
        for (let i = 0; i < lastArr.length; i++) {
            console.log(lastArr[i].join(""));

        }



    }
} //end of runProgram()

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});