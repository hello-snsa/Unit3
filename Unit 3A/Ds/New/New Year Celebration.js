function runProgram(input) {


    let newInput = input.split("\n").map(function (data) {
        return data.split(' ').map(Number)
    });
    let stack = [];
    let queue = [];


    for (let i = 1; i <= newInput[0]; i++) {
        if (newInput[i][0] == 1) {
            queue.push(newInput[i][1])
        }
        else if (newInput[i][0] == 2) {
            stack.push(newInput[i][1])

        }
        else if (newInput[i][0] == 3) {
            if (queue.length == 0) {
                console.log('-1')
            }
            else {
                console.log(queue[0])
            }
        }
        else if (newInput[i][0] == 4) {
            if (stack.length == 0) {
                console.log('-1')
            }
            else {
                console.log(stack[stack.length - 1])
            }

        }
        else if (newInput[i][0] == 5) {
            temp = queue[0];
            queue.shift();
            stack.push(temp)
        }

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