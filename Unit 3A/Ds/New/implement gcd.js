function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);

    var noOfQuiery = Number(newInput[0]);

    for (var i = 1; i <= noOfQuiery; i++) {


        var data = newInput[i].split(" ").map(Number);

        let a = data[0];
        let b = data[1];

        function fun(a, b) {
            if (b == 0)
                return a;
            return fun(b, a % b);

        }
        console.log(fun(a, b))




    } // T ends
} //End of runProgram()

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
}); //End of program