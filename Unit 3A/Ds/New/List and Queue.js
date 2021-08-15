function runProgram(input) {

    let newInput = input.split(/[\r\n]+/);

    let test = newInput[0];
    let arr = [];

    for (let i = 1; i <= test; i++) {

        let res = newInput[i].split(" ");

        if (res[0] == 'E') {

            let newArr = [];

            newArr.push(res[1]);

            arr = newArr.concat(arr)
        } else {
            if (arr.length == 0) {
                console.log("Empty");
            }
            else {
                console.log(arr.pop())
            }
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