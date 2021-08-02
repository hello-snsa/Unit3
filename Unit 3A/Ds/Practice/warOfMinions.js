function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var str = newInput[1];
    var first = [str[0]]
    var top = 0


    for (var i = 1; i < str.length; i++) {
        if (first[top] != str[i]) {
            first.push(str[i]);
            top++;
        }

        else if (first[top] == str[i]) {
            first.pop();
            top--;
        }
    }

    if (first.length == 0) {

        console.log(-1);

    }
    else {
        console.log(first.join(""));
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

