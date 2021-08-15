function runProgram(input) {

    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var query = Number(newInput[0]);

    for (var a = 1; a <= query; a++) {

        var containers = Number(newInput[a]);

        let res = fun(containers);
        console.log(res);

        function fun(containers) {

            if (containers < 0) {
                return 0;
            }
            else if (containers == 0) {
                return 1;
            }
            else {
                return (fun(containers - 4) + fun(containers - 8));
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