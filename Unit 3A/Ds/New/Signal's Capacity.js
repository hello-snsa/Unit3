function runProgram(input) {
    input = input.trim();

    let newInput = input.split("\n");

    let query = newInput[0];

    for (let a = 1; a <= query; a++) {
        let N = newInput[a * 2 - 1];
        let data = newInput[a * 2];
        let ans = "";

        let res = fun1(N, data);

        for (let i = 0; i < N; i++) {
            ans += res[i] + " "
        }

        console.log(ans)
    }



    function fun1(N, data) {

        let arr = [[data[0], 0]];
        let res = [1];

        for (let i = 1; i < N; i++) {
            let count = 0;
            let len = arr.length;
            while (len > 0 && arr[len - 1][0] <= data[i]) {
                arr.pop()
                count++;
            }
            if (len == 0) {
                res[i] = i + 1;
            }
            else {
                res[i] = i - (arr[len - 1][1]);
            }
            arr.push([data[i], i])
        }
        return res;

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