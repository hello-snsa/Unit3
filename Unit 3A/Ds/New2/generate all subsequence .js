function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);


    var n = Number(newInput[0]);

    var str = newInput[1];


    function fun(temp, str, a, b) {
        if (a <= b + 1 && temp != "") {
            console.log(temp);


        }


        for (var i = a; i <= b; i++) {


            fun(temp + str[i], str, i + 1, b);


        }


    }
    fun("", str, 0, n - 1);
}



process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});