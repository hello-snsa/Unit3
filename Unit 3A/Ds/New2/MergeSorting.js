function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    let arr = newInput[1];
    arr = arr.split(" ");
    arr = arr.map(Number);

    // console.log(arr);





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