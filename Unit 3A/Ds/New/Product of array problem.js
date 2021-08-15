function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);
    var arr = newInput[1].split(" ").map(Number);
    // console.log(arr)

    var res = 1;
    var n = arr.length - 1;
    rec(n);

    function rec(n) {

        if (n < 0) {
            return;
        }
        else {

            res *= arr[n];
            arr.pop();

            rec(n - 1)
        }



    }
    console.log(res);






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