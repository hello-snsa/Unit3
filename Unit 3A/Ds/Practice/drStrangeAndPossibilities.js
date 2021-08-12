function runProgram(input) {
    input = input.trim();

    let num = Number(input);

    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i + 1);
    }
    // console.log(arr)

    let len = arr.length;
    let res = fun(arr, len, num);
    console.log(res)

    function fun(arr, n, r) {

        let data = [];


        combinationUtil(arr, n, r, 0, data, 0);
    }


    function combinationUtil(arr, n, r,
        index, data, i) {

        if (index == r) {
            for (let j = 0; j < r; j++)
                console.log(data[j] + " ");
            console.log("");
            return;
        }

        if (i >= n)
            return;

        data[index] = arr[i];
        combinationUtil(arr, n, r, index + 1,
            data, i + 1);


        combinationUtil(arr, n, r, index, data, i + 1);
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





