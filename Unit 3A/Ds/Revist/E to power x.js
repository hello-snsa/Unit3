function runProgram(input) {


    var newInput = input.split(" ").map(Number);

    let x = newInput[0];
    var n = newInput[1];
    let temp1 = temp2 = 1;

    let res = myFunction(x, n);
    function myFunction(x, n) {

        if (n == 0)
            return 1;

        else {
            let r = myFunction(x, n - 1);
            temp1 *= x;
            temp2 *= n;
            return (r + temp1 / temp2);
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