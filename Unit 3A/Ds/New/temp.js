function runProgram(input) {
    input = input.trim();

    let newInput = input.split("\n");
    let testCase = newInput[0];
    for (let t = 1; t <= testCase; t++) {
        let len = newInput[t * 2 - 1];
        let arr = newInput[t * 2];
        let res = signalCap(len, arr);
        let str = ""
        for (let i = 0; i < len; i++) {
            str = str + res[i] + " "
        }

        console.log(str)
    }

}
function signalCap(len, arr) {

    let stack = [[arr[0], 0]];
    let res = [1];
    for (let i = 1; i < len; i++) {
        let count = 0;
        while (stack.length > 0 && stack[stack.length - 1][0] <= arr[i]) {
            stack.pop()
            count++;
        }
        if (stack.length == 0) {
            res[i] = i + 1;
        }
        else {
            res[i] = i - stack[stack.length - 1][1]
        }
        stack.push([arr[i], i])
    }
    return res;

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