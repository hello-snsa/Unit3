function runProgram(input) {

    input = input.trim();

    let N = Number(input);

    let initial = 0;
    let a = 1, b = 3, c = 5;

    let res = fun(N, initial);
    console.log(res);

    function fun(n, ini) {
        if (n < ini) {
            return 0;
        }
        else if (ini == n) {
            return 1;
        }
        else {
            return (fun(n, (ini + a)) + fun(n, (ini + b)) + fun(n, (ini + c)));
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