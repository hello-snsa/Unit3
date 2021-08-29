function runProgram(input) {
    input = input.trim();

    var newInput = input.split("\n").map(Number);

    var N = newInput[0];
    var str = "";
    var res;

    const fun = (a, arr) => {
        res = -1;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < a) {
                res = arr[i];
                break;
            }
        }
        return res;
    }

    const fun1 = (a, arr) => {
        res = -1;
        var max = -1;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > a) {
                max = arr[i];
                res = fun(max, arr.slice(i))
                break;
            }
        }
        return res;
    }



    for (var a = 1; a < N; a++) {
        res = fun1(newInput[a], newInput.slice(a));
        str += res + " "
    }

    str += "-1"
    console.log(str);


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





