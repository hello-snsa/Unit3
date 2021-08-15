function runProgram(input) {
    input = input.trim();

    let newInput = input.split("\n").map(Number);

    let N = newInput[0];
    let str = "";
    let res;


    for (let a = 1; a < N; a++) {
        res = fun1(newInput[a], newInput.slice(a));
        str += res + " "
    }
    str = str + "-1"
    console.log(str)
}

function fun1(a, arr) {
    let max = -1;
    res = -1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > a) {
            max = arr[i];
            res = fun2(max, arr.slice(i))
            break;
        }
    }
    return res;
}

function fun2(a, arr) {
    res = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < a) {
            res = arr[i];
            break;
        }
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
