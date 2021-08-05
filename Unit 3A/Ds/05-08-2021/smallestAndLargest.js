function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);
    var arr = newInput[1].split(" ").map(Number);
    // console.log(arr)

    var max = arr[0];
    var min = arr[0];
    var len = arr.length - 1;

    checkIt();
    function checkIt() {

        if (len < 0) {
            return;
        }
        else {

            if (arr[len] > max) {
                max = arr[len];
            }
            if (arr[len] < min) {
                min = arr[len]
            }
            len--;
            arr.pop();
            checkIt();

        }
    }




    console.log(min);
    console.log(max);






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