function runProgram(input) {

    var newInput = input.split(" ");
    var str = newInput[0]; //123

    var k = Number(newInput[1]); //3
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    var num = sum * k;//18

    var res = fun(num);

    function fun(n) {
        if (n >= 0 && n <= 9) {
            return n; //9
        } else {
            n = (n % 10) + Math.floor(n / 10); //(18%10=8) + (18\10=1) ==>9
            return fun(n); //9
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