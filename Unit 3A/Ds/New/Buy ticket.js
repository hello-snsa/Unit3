var queue = [];
function runProgram(input) {

    let newInput = input.split("\n").map(function (data) {
        return data.split(' ')
    });

    let len = Number(newInput[0]);

    for (let i = 1; i <= len; i++) {
        if (newInput[i][0] == 'E') {
            console.log(enque(queue, newInput[i][1]));
        }
        else {
            console.log(deque(queue))
        }
    }
}
function enque(queue, a) {
    queue.push(a);
    return queue.length;
}
function deque(queue) {
    let a;
    let b;
    let str = '';
    if (queue.length == 0) {
        a = -1;
        b = 0;
        str = a + ' ' + b;

    }
    else {
        a = queue[0];
        queue.shift()
        b = queue.length
        str = a + ' ' + b
    }
    return str;


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