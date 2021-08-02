function runProgram(input) {
    input = input.trim();

    let newInput = input.split("\n").map(function (data) {
        return data.trim()
    });

    let len = Number(newInput[0]);
    let data = newInput[1].split(' ').map(Number)
    let arr = [-1];
    let result = "";

    for (let i = 1; i < len; i++) {

        if (data[i] > data[i - 1]) {

            arr.push(data[i - 1])

        }
        else if (data[i] == data[i - 1]) {

            arr.push(data[i - 2])

        }
        else {
            arr.push(-1)

        }
    }


    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + " ";
    }
    console.log(result);


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