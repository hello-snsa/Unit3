function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var [len, k] = newInput[0].split(" ").map(Number);

    var arr = newInput[1].split(" ").map(Number);

    var count = 0;

    for (var i = 0; i < len; i++) {

        if (arr[k - 1] <= 0) {

            break;
        }
        else if (arr[i] >= arr[k - 1]) {
            count++;
        }

    }

    console.log(count);

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

