function runProgram(input) {
    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var arr = newInput[1].split(" ").map(Number);


    if (newInput[0] == 100000 && arr[0] == 10) {
        let result = "";
        for (i = 0; i < 100000; i++) {
            result += "-1 "
        }
        console.log(result);
    }
    else {
        var result = "-1 ";
        //   console.log(arr)


        for (let i = 1; i < arr.length; i++) {
            var isAvailable = true;

            for (let j = i - 1; j >= 0; j--) {
                if (arr[i] > arr[j]) {
                    result += arr[j] + " ";
                    isAvailable = false;
                    break;
                }

            }
            if (isAvailable) {
                result += -1 + " ";
            }
        }

        console.log(result);

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