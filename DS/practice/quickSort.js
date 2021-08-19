function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var len = newInput[0];
    var arr = newInput[1];

    // console.log(arr)


    fun1(arr, 1, len - 1);

    function fun1(arr, f, r) {
        if (f < r) {

            let pi = partition(arr, f, r);
            fun1(arr, f, pi - 1);
            fun1(arr, pi + 1, r);



        }

    }

    function part(arr, f, r) {
        let pi = arr[r];
        let i = (f - 1);

        for (let j = f; j <= r - 1; j++) {
            if (arr[j] < pi) {
                i++;
                swapIt(arr, i, j);
            }
        }
        swapIt(arr, i + 1, r)
        return (i + 1);


    }

    function swapIt(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }

    function printIt(arr, len) {
        for (i = 0; i < len; i++) {
            console.log(arr[i] + " ");

        }
    }


    console.log(arr)








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


