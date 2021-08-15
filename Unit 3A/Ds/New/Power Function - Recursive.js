function runProgram(input) {

    input = input.trim();
    var newInput = input.split(" ").map(Number);
    let num = Number(newInput[0]);
    let pow = Number(newInput[1]);



    function getPow(pow, n) {
        let x;

        if (pow == 1) {
            return n;
        }
        else if (pow == 0)
            return 1;
        else {
            return n * getPow(pow - 1, n);


        }

    }
    let result = getPow(pow, num)
    console.log(result);
    // console.log(num**pow)


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