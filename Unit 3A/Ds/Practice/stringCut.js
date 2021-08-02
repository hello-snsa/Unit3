function runProgram(input) {
    input = input.trim();

    var len = input.length;

    if (len % 2 == 0) {
        var a = [];
        var b = [];

        for (var i = Math.floor((len - 1) / 2); i >= 0; i--) {
            a.push(input[i]);
        }

        for (var i = len - 1; i >= Math.ceil((len - 1) / 2); i--) {
            b.push(input[i]);
        }

        console.log(a.join("") + b.join(""));

    }

    else if (len % 2 != 0) {

        var c = [];
        var d = [];

        for (var i = (len - 1) / 2 - 1; i >= 0; i--) {
            c.push(input[i]);
        }

        for (var i = len - 1; i >= (len - 1) / 2 + 1; i--) {
            d.push(input[i]);
        }

        console.log(c.join("") + input[(len - 1) / 2] + d.join(""));
    }


} //End of runProgram()

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
}); //End of program
