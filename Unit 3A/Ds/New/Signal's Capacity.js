function runProgram(input) {

    input = input.trim();

    let newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {

        var arr = newInput[a + 1].split(" ").map(Number);

        var N = newInput[a];

        var str = ""
        var count = 0;


        const fun = (N, arr) => {

            var data = [[arr[0], 0]];
            var ans = [1];

            for (var i = 1; i < N; i++) {

                for (var j = 0; data.length > 0 && data[data.length - 1][0] <= arr[i]; j++) {
                    data.pop();

                }

                if (data.length > 0) {
                    ans[i] = i - data[data.length - 1][1]

                }
                else {
                    ans[i] = i + 1;
                }

                data.push([arr[i], i])
            }


            for (var i = 0; i < N; i++) {
                str += ans[i] + " "
            }

            return str;
        }

        var res = fun(N, arr);

        console.log(res);

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