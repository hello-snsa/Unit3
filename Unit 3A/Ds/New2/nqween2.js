function runProgram(input) {

    input = input.trim();
    input = Number(input);

    let col = input;
    let d1, d2 = input;
    let ans = 0;
    let res = fun(0, input, ans);
    function fun(r, n, ans) {

        if (r == n) {

            ans++;
            return;

        }

        for (c = 0; c < n; c++) {
            if (!col[c] && !d1[r - c + n - 1] && !d2[r + c]) {
                col[c] = d1[r - c + n - 1] = d2[r + c] = 1;
                solve(r + 1, n, ans)
                col[c] = d1[r - c + n - 1] = d2[r + c] = 0;
            }
        }

    }
    console.log(res)

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