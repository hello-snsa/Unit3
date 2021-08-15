function runProgram(input) {

    input = input.trim();
    var n = Number(input);
    // console.log(n)

    var m = 1;
    var res = rec(n);
    // res

    function rec(n) {

        if (n <= 1) {
            return 1;
        }
        else {
            m = m * n;//n*(n-1);
            // console.log(m)
            rec(n - 1)
        }

    }
    console.log(m);






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