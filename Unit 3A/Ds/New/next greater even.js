function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a + 1].split(" ").map(Number);
        var result = 0;
        // console.log(data);

        for (let i = 0; i < data.length - 1; i++) {
            for (let j = i + 1; j < data.length; j++) {
                if (data[i] < data[j]) {
                    if (data[j] % 2 == 0) {
                        // console.log("data j",data[j])
                        result += data[i];
                    }
                    break;
                }
            }
        }

        console.log(result)

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