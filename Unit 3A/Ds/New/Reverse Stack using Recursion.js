var arr = []
function runProgram(input) {

    var newInput = input.split("\n").map(Number);

    for (let i = 0; i < newInput.length; i++) {
        if (newInput[i] == -1) {
            reverse();
            break;
        }
        arr.push(newInput[i])
    }


    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}


function insert(x) {
    if (arr.length == 0) {
        arr.push(x)
    }
    else {
        let a = arr[arr.length - 1];
        arr.pop();
        insert(x);
        arr.push(a)
    }
}
function reverse() {
    if (arr.length > 0) {
        let y = arr[arr.length - 1]
        arr.pop();
        reverse();
        insert(y)
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