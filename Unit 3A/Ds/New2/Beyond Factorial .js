function runProgram(input) {


    var newInput = input.split(" ").map(Number);

    let N = newInput[0];
    // console.log(N)

    let a = fun(N);
    let b = Math.log(a);
    let res = b;

    function fun(N) {
        if (N == 0) {
            return 0;

        }
        else if (N == 1) {
            return 1;
        }
        else {
            return N * fun(N - 1);

        }
    }



    console.log(res.toFixed(4));








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