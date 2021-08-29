function runProgram(input) {

    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var query = Number(newInput[0]);

    for (var a = 1; a <= query; a = a + 1) {

        var N = Number(newInput[a])
        var res = "";
        //  result

        const factData = (N) => {
            result = 1;
            let i = 0;


            while (i < N) {

                result *= 2 * (2 * i + 1) / (i + 2);

                i++;
            }
            return result;
        }

        let temp = factData(N);

        console.log(temp);

        const verify = (res, F, R, N) => {
            if (res.length == 2 * N) {
                console.log(res);
                return;
            }
            if (F > R) {
                verify(res + ")", F, R + 1, N)
            }
            if (F < N) {
                verify(res + "(", F + 1, R, N);
            }

        }


        verify(res, 0, 0, N);


    }//end of query




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