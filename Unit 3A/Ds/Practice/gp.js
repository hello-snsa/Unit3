function runProgram(input) {
    input = input.trim();

    let newInput = input.split(" ").map(Number);
    let n = newInput[0];
    let r = newInput[1];

    let res = fun(n, r)
    console.log(res.toFixed(4))


    function fun(a, b) {
        if (a == 0) {
            return 1
        }
        return fun(a - 1, b) + (1 / (b ** a))
    }




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





