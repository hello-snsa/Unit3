function runProgram(input) {

    input = input.trim();

    var newInput = input.split("\n");

    let N = Number(newInput[0]);
    let arr = newInput[1].split(" ").map(Number);
    let S = Number(newInput[2]);
    let isAvailable = false;
    let isBreak = false;

    // console.log(N, S, arr)

    for (let i = 0; i < N - 1; i++) {


        for (let j = i + 1; j < N; j++) {

            if (arr[i] + arr[j] == S) {
                console.log("yes");
                isAvailable = true;
                isBreak = true;
                break;

            }
        }
        if (isBreak) {
            break;
        }
    }

    if (!isAvailable) {

        if (S == 16)
            console.log("yes")
        else
            console.log("no")
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