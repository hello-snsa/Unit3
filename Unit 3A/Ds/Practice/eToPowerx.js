function runProgram(input) {
    input = input.trim();

    let newInput = input.split(" ");

    var x = Number(newInput[0]);

    var n = Number(newInput[1]);

    // console.log(x,n)

    let sum = 1;
    let temp1 = temp2 = 1;

    let res = fun(x, n);
    console.log(res.toFixed(4));

    function fun(x, n) {


        if (n == 0)
            return 1;

        else {
            let r = fun(x, n - 1);
            temp1 = temp1 * x;
            temp2 = temp2 * n;
            return (r + temp1 / temp2)
        }

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