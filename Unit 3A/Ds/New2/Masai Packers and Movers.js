function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var data = newInput[0].split(" ").map(Number);
    var N = data[0];
    var K = data[1];

    var arr = newInput[1].split(" ").map(Number);

    //   console.log(arr,N,K)
    let initial = 0;
    var count = 0;

    let res = fun(initial, N, K, arr)

    console.log(res);


    function fun(initial, N, K, arr) {
        if (initial == N) {
            return 1;

        }
        else if (initial > N) {
            return 0;
        }
        else {
            count = 0;
            let i = 0;
            while (i < K) {
                count += fun((initial + arr[i]), N, K, arr)

                i++;
            }
        }

        return count;
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