function runProgram(input) {

    var newInput = input.split(" ");
    var str = newInput[0];

    var k = Number(newInput[1]);
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    var num = sum * k;

    var res = fun(num);

    function fun(n) {
        if (n >= 0 && n <= 9) {
            return n;
        } else {
            n = (n % 10) + Math.floor(n / 10);
            return fun(n);
        }
    }
    console.log(res);

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