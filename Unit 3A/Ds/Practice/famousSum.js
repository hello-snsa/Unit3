function runProgram(input) {

    var newInput = input.split(" ").map(Number);
    let m = newInput[0];
    let k = newInput[1];

    let res = fun(m, k);




    function fun(n, l) {
        let sum = l * sumIt(n);
        return sumIt(sum);


    }

    function sumIt(n) {

        if (n == 0)
            return 0;
        return (n % 9 == 0) ? 9 : (n % 9);
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
});//En d of program