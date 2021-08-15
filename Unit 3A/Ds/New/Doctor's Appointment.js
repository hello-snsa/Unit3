function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var arr1 = newInput[1].split(" ").map(Number);
    var arr2 = newInput[2].split(" ").map(Number);
    var count = 0;

    for (var i = 0; i < arr2.length; i++) {

        for (var j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                arr1.splice(j, 1);
                count += j + 1;
            }
        }
    }
    console.log(count - 1)


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