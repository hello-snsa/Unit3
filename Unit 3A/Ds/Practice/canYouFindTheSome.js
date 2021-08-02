function runProgram(input) {
    input = input.trim();

    let newInput = input.split(/[\r\n]+/);
    let len = newInput[0];
    let arr = newInput[1].trim().split(" ").map(Number);



    let stack = [];
    let stack2 = [];
    let res1 = [];
    let res2 = [];
    let result = "";


    for (let i = 0; i < len; i++) {

        let isAvailable = false;
        while (stack.length > 0) {

            if (arr[stack[stack.length - 1]] > arr[i]) {

                res1.push(stack[stack.length - 1] + 1);
                isAvailable = true
                break;
            }
            stack.pop();
        }
        if (!isAvailable) {
            res1.push(-1)
        }
        stack.push(i);
    }


    for (let j = len - 1; j >= 0; j--) {
        let isAvailable = false;

        while (stack2.length > 0) {

            if (arr[stack2[stack2.length - 1]] > arr[j]) {

                res2.unshift(stack2[stack2.length - 1] + 1);
                isAvailable = true
                break;
            }
            stack2.pop();
        }
        if (!isAvailable) {
            res2.unshift(-1)
        }
        stack2.push(j);
    }


    for (k = 0; k < res1.length; k++) {
        let sum = res1[k] + res2[k];
        result += sum + " "
    }
    console.log(result)


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
});//En d of program

