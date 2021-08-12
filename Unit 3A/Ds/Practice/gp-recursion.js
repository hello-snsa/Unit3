function runProgram(input) {

    var newInput = input.split(" ");
    var n = Number(newInput[0]);
    var r = Number(newInput[1]);
    console.log(n, r)
    
    let res = fun(n);
    console.log(res)

    function fun(n) {
        if (n == 0)
            return 1;
        let result = 1 / (Math.pow(r, n) + fun(n - 1));
        return result;
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