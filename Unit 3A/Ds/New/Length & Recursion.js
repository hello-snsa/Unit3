function runProgram(input) {

    input = input.trim();

    // console.log(input)
    var len = 0;

    var str = input.split("");

    rec();


    function rec() {

        if (!str[0]) {
            return;
        }
        else {
            str.pop();
            len++;
            rec()



        }

    }
    console.log(len);






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